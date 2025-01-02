import React, { useState } from 'react';
import { FaCamera } from 'react-icons/fa'; // Importing a camera icon from react-icons

const PostForm = ({ onPostCreate }) => {
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null); // Holds the image file
  const [imagePreview, setImagePreview] = useState(null); // Holds the image preview URL

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file); // Store the file itself
      setImagePreview(URL.createObjectURL(file)); // Create a URL for the image preview
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (content.trim() || image) {
      // Pass content and image to the parent (Feed) component
      onPostCreate({ content, image: imagePreview });

      // Reset form fields after post creation
      setContent(''); // Reset content field
      setImage(null); // Clear the image state
      setImagePreview(null); // Clear the image preview state

      // Reset the file input field
      document.getElementById('imageInput').value = ''; // Reset the file input field
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-4 mb-4">
      <textarea
        className="w-full p-3 border border-gray-300 rounded-lg mb-2 text-lg resize-none"
        placeholder="What's on your mind?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows="4"
      />
      
      {/* Image Upload Section */}
      <div className=" mb-4">
        <label htmlFor="imageInput" className="cursor-pointer">
          <FaCamera className="text-gray-500 text-3xl mr-3 mb-1" />
        </label>
        <input
          id="imageInput"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Post preview"
            className="w-32 h-32 object-cover rounded-md shadow-sm"
          />
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-20 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
      >
        Post
      </button>
    </form>
  );
};

export default PostForm;
