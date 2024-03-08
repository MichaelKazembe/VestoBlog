//Profile.js
import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Profile = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await fetch("/api/profile/");
                if (!response.ok) {
                    throw new Error("Failed to fetch profile information, Please Log in");
                }
                const data = await response.json();
                setUser(data);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchUserProfile();
    }, []);

    const handleEditProfile = async () => {
        // Implement editing user profile logic
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <Container className="p-3 my-5">
            <h1>Welcome to Your Profile {user.firstname} {user.lastname}</h1>
            <Button variant="primary mx-2" onClick={handleEditProfile}>Edit Profile</Button>
            <Button variant="danger mx-2">Delete Profile</Button>
            <h2>Your Posts</h2>
            <div>
                {user.posts && (
                    <div>
                        {user.posts.map((post, index) => (
                            <Card key={index} className="mb-3">
                                <Card.Body>
                                    <Card.Title>{post.title}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Author: {post.author}</Card.Subtitle>
                                    <Card.Text>{post.content}</Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Category: {post.category}</small><br />
                                    <small className="text-muted">Date Posted: {post.datePosted}</small>
                                </Card.Footer>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
        </Container>
    );
};

export default Profile;


//	    <h2>Create New Post</h2>
//	    <Form onSubmit={handleNewPostSubmit}>
//        <Form.Group controlId="newPostTitle">
//          <Form.Label>Title</Form.Label>
//          <Form.Control
//            type="text"
//            value={newPostTitle}
//            onChange={(e) => setNewPostTitle(e.target.value)}
//          />
//        </Form.Group>
//        <Form.Group controlId="newPostContent">
//          <Form.Label>Content</Form.Label>
//          <ReactMarkdownEditorLite
//            value={newPostContent}
//            onChange={({ text }) => setNewPostContent(text)}
//            renderHTML={(text) => <ReactMarkdown>{text}</ReactMarkdown>}
//            placeholder="Write your post here"
//          />
//        </Form.Group>
//               <Button variant="primary" type="submit">
//          Submit Post
//        </Button>
//      </Form>

