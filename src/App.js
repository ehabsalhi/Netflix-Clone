import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './components/MovieList';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Home from './components/Home';
import { Route, Router, Routes } from 'react-router-dom';
import FavList from './components/FavList';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element = {<Home/> } />
        <Route path='/favorite' element = {<FavList/> } />
      </Routes>
    </div>
  );
}

export default App;
