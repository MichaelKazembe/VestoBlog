import React, { useState, useEffect } from 'react';
import Card from "react-bootstrap/Card";


const Articles = () => {
	const [posts, setPosts] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch("/api/home");
                if (!response.ok) {
                    throw new Error("Failed to fetch Posts Right now");
                }
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchPosts();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!posts) {
        return <div>Loading...</div>;
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <h5>Blog</h5>
					{posts && (
						<div>
                        {posts.posts.map((post, index) => (
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
            </div>
        </div>
    );
};

export default Articles;
