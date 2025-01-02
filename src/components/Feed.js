import React, { useState, useEffect } from 'react';
import PostForm from './PostForm';
import Post from './Post';

const Feed = () => {
  const [posts, setPosts] = useState([]);
  
  // Load posts from localStorage when the component mounts
  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    // Ensure that each post has a comments array
    const postsWithComments = savedPosts.map(post => ({
      ...post,
      comments: post.comments || []  // Ensure comments is always an array
    }));
    setPosts(postsWithComments);
  }, []);

  // Save posts to localStorage whenever the posts array changes
  useEffect(() => {
    if (posts.length > 0) {
      localStorage.setItem('posts', JSON.stringify(posts));
    }
  }, [posts]);

  const handlePostCreate = (newPost) => {
    const newPostWithTimestamp = { 
      ...newPost,
      id: Date.now(),
      likes: 0,
      comments: [],  // Initialize comments as an empty array
      timestamp: new Date().toLocaleString(),
    };
    setPosts([newPostWithTimestamp, ...posts]);
  };

  const handleLikePost = (postId) => {
    const updatedPosts = posts.map(post => 
      post.id === postId 
        ? { ...post, likes: post.likes + 1 } 
        : post
    );
    setPosts(updatedPosts);
  };

  const handleAddComment = (postId, commentText) => {
    const updatedPosts = posts.map(post => 
      post.id === postId
        ? { 
            ...post, 
            comments: [...post.comments, { user: 'Anonymous', text: commentText }] 
          }
        : post
    );
    setPosts(updatedPosts);
  };

  const handleDeletePost = (postId) => {
    const updatedPosts = posts.filter(post => post.id !== postId);
    setPosts(updatedPosts);
  };

  return (
    <div className="max-w-lg mx-auto mt-8">
      <PostForm onPostCreate={handlePostCreate} />
      {posts.map(post => (
        <Post 
          key={post.id} 
          post={post} 
          onLikePost={handleLikePost} 
          onAddComment={handleAddComment} 
          onDeletePost={handleDeletePost} 
        />
      ))}
    </div>
  );
};

export default Feed;
