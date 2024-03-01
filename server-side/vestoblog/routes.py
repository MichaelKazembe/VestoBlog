#!/usr/bin/env python3
""" Defines routes and view functions for the vestoblog app API requests"""
from vestoblog import app, db, jwt
from flask import request, jsonify, abort
from vestoblog.models import User, Post, Comment
from flask_jwt_extended import create_access_token, set_access_cookies, get_jwt
from flask_jwt_extended import jwt_required, verify_jwt_in_request, current_user
from flask_jwt_extended import get_jwt_identity, unset_jwt_cookies
from datetime import datetime, timedelta


# Takes a User object is passed in as the identity when creating JWTs
# and converts it to a JSON serializable format.
@jwt.user_identity_loader
def user_identity_lookup(user):
    return user.id


# Loads a User object from database whenever a protected route is accessed if
# lookup successful, or None if the lookup failed for any reason.
@jwt.user_lookup_loader
def user_lookup_callback(_jwt_header, jwt_data):
    identity = jwt_data["sub"]
    return User.query.filter_by(id=identity).one_or_none()


@app.after_request
def refresh_expiring_jwts(response):
    """ Refresh any token that is within 10 minutes of expiring """
    try:
        exp_time = get_jwt()["exp"]
        present_time = datetime.utcnow()
        target_time = datetime.timestamp(present_time + timedelta(minutes=10))
        if target_time > exp_time:
            access_token = create_access_token(identity=get_jwt_identity())
            set_access_cookies(response, access_token)
        return response
    except (RuntimeError, KeyError):
        # Case where there is not a valid JWT. Just return the original respone
        return response


@app.route('/')
@app.route('/home')
def home():
    """ View function for apps Home Page"""
    return "<h1>Welcome to Vestoblog</h1>"
    # return render_template("home.html")


@app.route('/register', methods=["POST"])
def register():
    """ Registers a new user and logs account in upon success """

    firstname = request.form.get("firstname", None)
    lastname = request.form.get("lastname", None)
    email = request.form.get("email", None)
    password = request.form.get('password', None)

    if (not firstname) or (not lastname) or (not email) or (not password):
        return jsonify(msg="No field can be empty"), 400

    check_email = User.query.filter_by(email=email).first()
    if check_email:
        return jsonify(msg='That email already exists'), 400

    user = User(firstname=firstname, lastname=lastname, email=email)
    user.create_password_hash(password)
    db.session.add(user)
    db.session.commit()
    response = jsonify(msg='Account created successfully')
    access_token = create_access_token(identity=user)
    set_access_cookies(response, access_token)
    return response, 200


@app.route('/login', methods=['GET', 'POST'])
def login():
    """ Logs in a user account """

    # Checks if a user accessing the route through a GET request
    # is already logged in
    if verify_jwt_in_request(optional=True):
        return jsonify(msg="Already logged In"), 200

    elif request.method == "POST":
        email = request.form.get("email", None)
        password = request.form.get("password", None)

        if not email or not password:
            return jsonify(msg="No field can be empty"), 400

        user = User.query.filter_by(email=email).first()
        if user and user.check_password_hash(password):
            response = jsonify({"msg": "Login successful"})
            access_token = create_access_token(identity=user)
            set_access_cookies(response, access_token)
            return response, 200
        else:
            return jsonify(msg="Invalid email or password"), 400

    else:
        return jsonify(msg="Enter account's email and password to login"), 200


@app.route('/profile/')
@jwt_required()
def profile():
    """ Sends profile information of current logged in user """

    response = {
        "firstname": current_user.firstname,
        "lastname": current_user.lastname,
        "email": current_user.email,
        "role": current_user.role,
        "id": current_user.id
    }

    user_posts = current_user.posts
    posts = []
    for post in user_posts:
        posts.append({
            "title": post.title,
            "author": f"{post.author.firstname} {post.author.lastname}",
            "category": post.category,
            "date posted": post.date_posted.rsplit(":", maxsplit=1)[0],
            "content": post.content
        })

    if posts:
        response["posts"] = posts

    return jsonify(response), 200


@app.route('/logout', methods=['POST'])
@jwt_required()
def logout():
    """ Logs out user account """

    response = jsonify({"msg": "Logout successful"})
    unset_jwt_cookies(response)

    return response, 200


@app.route('/unregister', methods=["POST"])
@jwt_required()
def unregister():
    """ Deletes a user's account from the databse """

    user = current_user
    response = jsonify(msg="Account deleted succesfully")
    unset_jwt_cookies(response)

    # Delete User's comments to a post first
    post_comments = user.comments
    for comment in post_comments:
        db.session.delete(comment)

    # Delete User's posts first before deleting user
    user_posts = user.posts
    for post in user_posts:
        db.session.delete(post)

    db.session.delete(user)
    db.session.commit()

    return response, 200


@app.route('/article/<string:title>')
def article(title):
    """ Sends a Post's information """

    get_post = Post.query.filter_by(title=title).first_or_404()
    response = {
        "title": get_post.title,
        "author": f"{get_post.author.firstname} {get_post.author.lastname}",
        "category": get_post.category,
        "date posted": get_post.date_posted.rsplit(":", maxsplit=1)[0],
        "content": get_post.content
    }

    return response, 200


@app.route('/article/add', methods=['POST'])
@jwt_required()
def add_article():
    """ Receives information and creates new post in database """

    if current_user.role != "Admin":
        abort(403, msg="This account cannot create a post")

    title = request.form.get("title", None)
    content = request.form.get("content", None)
    category = request.form.get("category", None)

    if not title or not content or not category:
        return jsonify(msg="No field can be empty"), 400

    if Post.query.filter_by(title=title).one_or_none():
        return jsonify(msg="The title for this post is already taken"), 400

    post = Post(title=title, content=content, category=category,
                admin_id=current_user.id)
    db.session.add(post)
    db.session.commit()

    # Redirect to same route or different route upon success
    return jsonify(msg="Post added successfully"), 200


@app.route('/article/<string:title>/delete', methods=['POST'])
@jwt_required()
def delete_article(title):
    """ Delete a post by a user from the database """

    post = Post.query.filter_by(title=title).first_or_404()

    if post.author != current_user:
        abort(403, msg="This account cannot delete this post")

    # Delete comments to a post first
    post_comments = post.comments
    for comment in post_comments:
        db.session.delete(comment)

    db.session.delete(post)
    db.session.commit()

    return jsonify(msg="Post deleted successfully"), 200


@app.route('/search/<string:search_string>')
def search_article(search_string):
    """ Searches for a Post's information by title or category """

    # Check if the search string matches any post title
    post_by_title = Post.query.filter(Post.title.like('%'
                                      + search_string + '%')).all()

    # Check if the search string matches any post category
    post_by_category = Post.query.filter(Post.category.like('%'
                                         + search_string + '%')).all()

    # Combine the results from both searches as a set to eliminate duplicates
    search_results = set(post_by_title + post_by_category)

    # If there are no results, return a 404 error
    if not search_results:
        abort(404, description=f"No articles found for '{search_string}'")

    # Create a response object that contains the search results
    response = {
        "search_string": search_string,
        "results": [
            {
                "title": post.title,
                "author": f"{post.author.firstname} {post.author.lastname}",
                "category": post.category,
                "date posted": post.date_posted.rsplit(":", maxsplit=1)[0],
                "content": post.content
            } for post in search_results
        ]
    }

    return jsonify(response), 200


@app.route('/article/<string:title>/comment', methods=['POST'])
@jwt_required()
def comment_on_article(title):
    """ Register a comment from a user on an article """

    post = Post.query.filter_by(title=title).first_or_404()

    content = request.form.get("content", None)
    if not content:
        return jsonify(msg="Comment cannot be empty"), 400

    comment = Comment(content=content, user_id=current_user.id,
                      post_id=post.id)

    db.session.add(comment)
    db.session.commit()

    return jsonify(msg="Comment added succesfully")
