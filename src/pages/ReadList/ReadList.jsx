import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStordbook } from '../../utilateiy/AddDB';
import Book from '../Books/Book';

const ReadList = () => {
  const[redList,setREdList]=useState([])
  const data = useLoaderData();
  // console.log(data);
  useEffect(() => {
    const storedBookData = getStordbook();
    // console.log(storedBookData);
    const conVart = storedBookData.map(id => parseInt(id));
    // console.log(conVart);
    const myREad = data.filter(b => conVart.includes(b.bookId));
    // console.log(myREad);
    setREdList(myREad);
    
  },[])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-pink-50 py-10 px-4 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 drop-shadow-md">
        📚 My Book Lists
      </h1>

      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden ">
        <Tabs>
          <TabList className="flex justify-between border-b border-gray-200 bg-gray-50">
            <Tab
              className="w-1/2 py-3 text-center font-medium text-gray-600 cursor-pointer hover:bg-blue-400 transition duration-200"
              selectedClassName="bg-blue-700 text-white rounded-t-2xl shadow-inner"
            >
              ReadList
            </Tab>
            <Tab
              className="w-1/2 py-3 text-center font-medium text-gray-600 cursor-pointer hover:bg-pink-400 transition duration-200"
              selectedClassName="bg-pink-700 text-white rounded-t-2xl shadow-inner"
            >
              WishList
            </Tab>
          </TabList>

          <TabPanel>
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                📖 My Read List Books
              </h2>
              <p className="text-gray-600 italic">
                <div className='grid grid-cols-1 md:grid-cols-2'> {redList.map((book) => (
                  <Book singleBook={book}></Book>
                ))}</div>
               
              </p>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                💖 My Wishlist Books
              </h2>
              <p className="text-gray-600 italic">
                Your favorite books waiting to be read...
              </p>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ReadList;
