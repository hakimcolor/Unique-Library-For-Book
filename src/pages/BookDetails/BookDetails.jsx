import React from 'react';
import { useLoaderData, useParams } from 'react-router';

// Helper for rating stars
const StarRating = ({ rating }) => {
  const maxStars = 5;
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;
  return (
    <div className="flex items-center gap-1">
      {[...Array(fullStars)].map((_, i) => (
        <svg
          key={i}
          className="w-5 h-5 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.288 3.965c.3.921-.755 1.688-1.54 1.118l-3.389-2.46a1 1 0 00-1.175 0l-3.389 2.46c-.784.57-1.838-.197-1.539-1.118l1.288-3.965a1 1 0 00-.364-1.118L2.174 9.394c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z" />
        </svg>
      ))}
      {halfStar && (
        <svg
          className="w-5 h-5 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <defs>
            <linearGradient id="half">
              <stop offset="50%" stopColor="#FBBF24" />
              <stop offset="50%" stopColor="white" />
            </linearGradient>
          </defs>
          <path
            fill="url(#half)"
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.288 3.965c.3.921-.755 1.688-1.54 1.118l-3.389-2.46a1 1 0 00-1.175 0l-3.389 2.46c-.784.57-1.838-.197-1.539-1.118l1.288-3.965a1 1 0 00-.364-1.118L2.174 9.394c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z"
          />
        </svg>
      )}
      <span className="text-sm text-gray-600 ml-2">
        {rating.toFixed(1)} / 5
      </span>
    </div>
  );
};

const BookDetails = () => {
  const { id } = useParams();
  const bookID = parseInt(id);
  const data = useLoaderData();

  const book = data.find((bk) => bk.bookId === bookID);

  if (!book) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh]">
        <h2 className="text-2xl font-semibold text-red-600">Book not found</h2>
      </div>
    );
  }

  const {
    bookName,
    author,
    review,
    image,
    rating,
    category,
    yearOfPublishing,
    publisher,
    tags,
  } = book;

  return (
    <div className="max-w-4xl mx-auto mt-8 p-8 bg-gradient-to-br from-indigo-50 via-white to-pink-50 shadow-2xl rounded-2xl flex flex-col md:flex-row gap-10">
      <div className="flex-shrink-0 flex flex-col items-center justify-center">
        <img
          src={image}
          alt={bookName}
          className="w-64 h-80 object-cover rounded-xl shadow-lg border-4 border-indigo-100"
        />
        <div className="mt-4">
          <StarRating rating={rating} />
        </div>
      </div>
      <div className="flex-grow flex flex-col gap-5">
        <h1 className="text-4xl font-extrabold text-indigo-900 leading-tight">
          {bookName}
        </h1>
        <p className="text-xl text-gray-700">
          by <span className="font-bold text-indigo-600">{author}</span>
        </p>
        <div>
          <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full mr-3 text-base font-medium shadow">
            {category}
          </span>
          <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-base font-medium shadow">
            {yearOfPublishing}
          </span>
        </div>
        <div className="flex gap-2 flex-wrap">
          {tags &&
            tags.map((tag) => (
              <span
                key={tag}
                className="bg-pink-100 text-pink-700 px-3 py-1 rounded-2xl text-sm font-medium shadow"
              >
                #{tag}
              </span>
            ))}
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-bold text-indigo-700 mb-2">Publisher</h2>
          <p className="text-lg text-gray-800">{publisher}</p>
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-bold text-indigo-700 mb-2">Review</h2>
          <p className="text-gray-700 text-lg italic border-l-4 border-indigo-200 pl-4">
            {review}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
