import React from 'react'
import Banner from '../../components/Banner/Banner'
import BookFetce from '../Books/BookFetce'
import { useLoaderData } from 'react-router'

const Home = () => {
  const boodData = useLoaderData();
  // console.log(boodData);

  
  
  return (
    <div className="p-4 xl:p-0">
      <Banner></Banner>
      <BookFetce boodData={boodData}></BookFetce>
    </div>
  );
}

export default Home
