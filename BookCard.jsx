// src/components/BookCard.js
import React from "react";

function BookCard({ book }) {
  const { title, author_name, cover_i, first_publish_year } = book;
  const coverImage = cover_i
    ? `https://covers.openlibrary.org/b/id/${cover_i}-L.jpg`
    : "https://via.placeholder.com/150";

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 text-center">
      <img src={coverImage} alt={title} className="w-full h-48 object-cover mb-4 rounded-md" />
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-gray-700">{author_name ? author_name.join(", ") : "Unknown Author"}</p>
      <p className="text-gray-500">{first_publish_year || "N/A"}</p>
    </div>
  );
}

export default BookCard;
