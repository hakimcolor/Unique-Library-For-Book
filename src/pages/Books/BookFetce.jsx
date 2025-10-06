import React, { Suspense } from 'react';
import Book from './Book';

const BookFetce = ({ boodData }) => {
  return (
    <div className="flex justify-center mt-10 ">
      <Suspense fallback={<h1>Loading...</h1>}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center p-5 md:p-0 ">
        {boodData.map((singleBook) => (
            <Book key={singleBook.bookId} singleBook={singleBook} />
          ))}
          
        </div>
      </Suspense>
    </div>
  );
};

export default BookFetce;
``;
