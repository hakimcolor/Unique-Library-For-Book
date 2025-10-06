import React from 'react'
import { FaStarHalfAlt } from 'react-icons/fa';
import { Link } from 'react-router';
const Book = ({ singleBook }) => {
  console.log(singleBook);
  const {
    bookId,
    bookName,
    author,
    review,
    image,
    rating,
    category,
    yearOfPublishing, publisher,
    tags,
  } = singleBook;
  return (
    <Link to={`/BookDetails/${bookId}`}>
      <div className="card border-2 border-gray-300 w-80 md:w-80 lg:80 2xl:w-96 p-4   shadow-sm ">
        <figure className=" bg-gray-100 rounded-3xl ">
          <img className=" h-[300px]  w-[200px] p-4" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          {' '}
          <div className=" text-sm  ml-1 space-x-10 text-green-500  font-semibold  ">
            {tags.map((k) => (
              <button className="p-2 bg-gray-100 rounded-xl">{k}</button>
            ))}
          </div>
          <h2 className="card-title Playfair-Display text-xl md:text-2xl lg:text-3xl mt-3">
            {bookName}{' '}
            <div
              className=" ml-5 font-normal text-sm border-gray-200 border-2 px-5 bg-gray-50 rounded-xl shadow-3xl
          "
            >
              {yearOfPublishing}
            </div>
          </h2>
          <p className="font-bold  text-gray-800">By : {author}</p>
          <div className="card-actions  justify-between mt-2 border-t-2 border-dashed">
            <div className="font-bold text-sm pt-5">{category}</div>
            <div className="font-bold text-sm pt-5  ml-10 flex items-center gap-4 ">
              {' '}
              <span> {rating}</span> <FaStarHalfAlt />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book
