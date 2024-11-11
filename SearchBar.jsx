// src/components/SearchBar.js
import React, { useState } from "react";

function SearchBar({ onSearch }) { // Make sure onSearch is passed correctly from props
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title) onSearch(title);
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mb-6">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Search for a book by title"
        className="border border-gray-300 p-2 rounded-l-md w-2/3"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 rounded-r-md"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
