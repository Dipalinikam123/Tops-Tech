import React, { useState } from 'react';

export default function ReviewForm({ addReview }) {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !rating) {
      alert('Title and Rating are required');
      return;
    }
    addReview({ title, rating, description });
    setTitle('');
    setRating('');
    setDescription('');
  };

  return (
    <div>
      <h2>Give Review</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title*</label><br />
        <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required /><br /><br />
        <label htmlFor="rating">Rating*</label><br />
        <input type="number" id="rating" value={rating} min="1" max="5" onChange={(e) => setRating(e.target.value)} required /><br /><br />
        <label htmlFor="description">Description</label><br />
        <textarea id="description" value={description} rows="4" cols="50" onChange={(e) => setDescription(e.target.value)}></textarea><br /><br />
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </form>
    </div>
  );
}