//Profile.js
import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import ReactMarkdownEditorLite from "react-markdown-editor-lite";
import ReactMarkdown from "react-markdown";

const Profile = () => {
  const [posts, setPosts] = useState([]);
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostContent, setNewPostContent] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user's posts from the API
    const fetchPosts = async () => {
      try {
        const response = await axios.get("/articles");
        setPosts(response.data);
      } catch (error) {
        console.error("Failed to fetch posts:", error.response.data);
      }
    };
    fetchPosts();

    // Fetch user's profile from the API
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get("/profile");
        setUser(response.data);
      } catch (error) {
        console.error("Failed to fetch user profile:", error.response.data);
      }
    };
    fetchUserProfile();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/articles/${id}`);
      setPosts(posts.filter((post) => post.id !== id));
    } catch (error) {
      console.error("Failed to delete post:", error.response.data);
    }
  };

  const handleNewPostSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/articles", {
        title: newPostTitle,
        content: newPostContent,
        // Add any other fields you need for the post
      });
      setPosts([...posts, response.data]);
      setNewPostTitle("");
      setNewPostContent("");
    } catch (error) {
      console.error("Failed to create new post:", error.response.data);
    }
  };

  const handleEditProfile = async () => {
    // Implement editing user profile logic
  };

  return (
    <Container className="p-3 my-5">
      <h1>Welcome to Your Profile</h1>
      <Button variant="primary" onClick={handleEditProfile}>Edit Profile</Button>
      <hr />
      <h2>Create New Post</h2>
      <Form onSubmit={handleNewPostSubmit}>
        <Form.Group controlId="newPostTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            value={newPostTitle}
            onChange={(e) => setNewPostTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="newPostContent">
          <Form.Label>Content</Form.Label>
          <ReactMarkdownEditorLite
            value={newPostContent}
            onChange={({ text }) => setNewPostContent(text)}
            renderHTML={(text) => <ReactMarkdown>{text}</ReactMarkdown>}
            placeholder="Write your post here"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit Post
        </Button>
      </Form>
      <hr />
      <h2>Your Posts</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <ReactMarkdown>{post.content}</ReactMarkdown>
          <Button variant="warning">Edit</Button>{" "}
          <Button variant="danger" onClick={() => handleDelete(post.id)}>
            Delete
          </Button>
          <hr />
        </div>
      ))}
    </Container>
  );
};

export default Profile;
