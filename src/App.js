import React from 'react';
import Header from './components/Header';
import Feed from './components/Feed';

const App = () => {
  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      <Header />
      <Feed />
    </div>
  );
};

export default App;
