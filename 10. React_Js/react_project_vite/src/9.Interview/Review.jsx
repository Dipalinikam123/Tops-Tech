export default function Reviews({ reviews }) {
    return (
      <div>
        <h2>Reviews</h2>
        <ul>
          {reviews.map((review, index) => (
            <li key={index}>
              <strong>{review.title}</strong> - Rating: {review.rating}/5<br />
              <p>{review.description}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }