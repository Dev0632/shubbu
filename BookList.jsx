import React from 'react';
import './BookList.css';

function BookList({ books }) {
  return (
    <div className="book-list">
      {books.map((book) => (
        <div key={book.key} className="card">
          <div className="card-image-wrapper">
            <img
              src={
                book.cover_i
                  ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
                  : 'https://via.placeholder.com/150'
              }
              alt={book.title}
              className="card-image"
            />
          </div>
          <div className="card-content">
            <h2 className="card-title">{book.title}</h2>
            <p className="card-author">
              Author: {book.author_name ? book.author_name[0] : "Unknown Author"}
            </p>
            <p className="card-published">
              First Published: {book.first_publish_year || "N/A"}
            </p>
            {book.isbn && book.isbn.length > 0 && (
              <p className="card-isbn">ISBN: {book.isbn[0]}</p>
            )}
            {book.subject && book.subject.length > 0 && (
              <p className="card-subjects">
                Subjects: {book.subject.slice(0, 3).join(', ')}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookList;
