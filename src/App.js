import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from './components/Navbar.Component/Navbar'
import Book from './components/Book.Component/Book'

const App = () => {
  return (
    <div className='bookforme'>
      <Navbar />
      <br/>
      <Book />
    </div>
  );
}

export default App;
