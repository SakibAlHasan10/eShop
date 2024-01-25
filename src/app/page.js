import Navbar from '@/components/Navbar';
import SearchBar from '@/components/SearchBar';
import TopNavbar from '@/components/TopNavbar';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <TopNavbar/>
      <hr/>
      <SearchBar/>
      <hr/>
      <Navbar/>

      HomePage
    </div>
  );
};

export default HomePage;