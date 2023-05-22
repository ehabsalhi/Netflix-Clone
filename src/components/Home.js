import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './MovieList';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Navibar from './Navbar';

function Home() {
  const [trendData , setdata] = useState([])

  const fetchData = async() =>{
    try{
      const res = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=37ddc7081e348bf246a42f3be2b3dfd0&language=en-US`);
      console.log(res.data.results) 
      setdata(res.data.results)  

    }catch (err) {
      console.log('catch Error');
    }
  }

  
  useEffect ( () => {
    fetchData()
  } , [])


  return (
    <div className="App">

      <Navibar/>
      <MovieList data = {trendData}/>
    </div>
  );
}

export default Home;
