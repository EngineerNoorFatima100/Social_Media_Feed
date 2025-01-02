import React, { useState } from 'react';
import { FaTrashAlt, FaThumbsUp, FaComment } from 'react-icons/fa';

const Post = ({ post, onLikePost, onAddComment, onDeletePost }) => {
  const { id, content, image, likes, comments, timestamp } = post;
  const [commentText, setCommentText] = useState('');
  const [showComments, setShowComments] = useState(false);
  
  const handleLike = () => {
    onLikePost(id);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      onAddComment(id, commentText);
      setCommentText('');
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      {/* Post Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          {/* Updated to a female avatar */}
          <img 
            src="https://randomuser.me/api/portraits/women/17.jpg" 
            alt="Profile" 
            className="w-10 h-10 rounded-full mr-2" 
          />
          <div>
            <h4 className="font-semibold text-lg">Noor Fatima</h4>
            <p className="text-sm text-gray-500">{timestamp}</p>
          </div>
        </div>
        <button onClick={() => onDeletePost(id)} className="text-gray-500 hover:text-red-500">
          <FaTrashAlt />
        </button>
      </div>

      {/* Post Content */}
      <p className="text-gray-800 mb-4">{content}</p>

      {/* Post Image */}
      {image && <img src={image} alt="Hello World" className="w-full h-full object-cover rounded-md mb-4" />}

      {/* Interaction Buttons */}
      <div className="flex space-x-4 text-gray-500">
        <button onClick={handleLike} className="flex items-center">
          <FaThumbsUp className="mr-2" /> {likes} Likes
        </button>
        <button onClick={() => setShowComments(!showComments)} className="flex items-center">
          <FaComment className="mr-2" /> {comments.length} Comments
        </button>
      </div>

      {/* Comments Section */}
      {showComments && (
        <div className="mt-4">
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <div key={index} className="mb-2">
                <strong>{comment.user}</strong>: {comment.text}
              </div>
            ))
          ) : (
            <p className="text-gray-500">No comments yet.</p>
          )}

          {/* Comment Input */}
          <form onSubmit={handleCommentSubmit} className="mt-2">
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Add a comment..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
            <button
              type="submit"
              className="bg-blue-500 text-white py-1 px-3 mt-2 rounded-lg hover:bg-blue-600"
            >
              Comment
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Post;
