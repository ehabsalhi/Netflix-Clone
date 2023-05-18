import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './MovieList';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Home() {
  const [trendData , setdata] = useState([])
  const fetchData = async() =>{
    try{
      const res = await axios.get(`http://localhost:3008/trending`);
      console.log(res.data.trending) 
      setdata(res.data.trending) 
    }catch (err) {
      console.log('catch Error');
    }
  }

  useEffect ( () => {
    fetchData()
  } , [])

  return (
    <div className="App">
      <MovieList data = {trendData}/>
    </div>
  );
}

export default Home;
