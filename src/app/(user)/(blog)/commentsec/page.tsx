"use client";

import React, { useState, useEffect } from "react";

const CommentSec = () => {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<{username:string; comment:string }[]>([])

  // Fetch saved comments from localStorage when the component mounts
  useEffect(() => {
    const savedComments = localStorage.getItem("comments")
    if (savedComments) [
        setComments(JSON.parse(savedComments))
    ]
  }, []);

  // Save comments to localStorage whenever the comments array changes
  useEffect(() => {
    if (comments.length > 0) {
      localStorage.setItem('comments', JSON.stringify(comments));
    }
  }, [comments]);

  // Handle form submission
  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();

    if (username && comment) {
      const newComment = {username, comment, id: Date.now() }
      setComments([newComment, ...comments]);
      setUsername('');
      setComment('');
    }
 
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Comment Section</h2>


      <form onSubmit={handleSubmit} className="mb-6">
        <div className="mb-4">
          <label className="block text-gray-700">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your username"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Comment</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Write your comment"
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
          Add Comment
        </button>
      </form>

      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Comments</h3>
        <div className="space-y-4">
          {comments.map((item, index) => (
            <div key={index} className="p-4 bg-gray-100 rounded-md shadow-sm">
              <p className="font-semibold text-gray-800">{item.username}</p>
              <p className="text-gray-600 mt-2">{item.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommentSec;
