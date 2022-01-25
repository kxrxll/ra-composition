import React from 'react';
import './App.css';
import News from './Example.components/News';
import Search from './Example.components/Search';
import Information from './Example.components/Information';

const Example = () => {
  return (
    <div className="search">
      <News />
      <Search />
      <Information />
    </div>
  )
}

export default Example;