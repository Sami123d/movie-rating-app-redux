import React, { useEffect } from 'react'
import "./home.scss";
import MovieListing from "../../component/MovieListing/MovieListing"
import MovieApi from '../../common/apis/MovieApi';
import  {APIKEY}  from '../../common/apis/MovieApiKey';
import { useDispatch } from 'react-redux';
import { addMovies } from '../../features/movie/movieSlice';
function Home() {
  const dispatch = useDispatch();
useEffect(()=>{
  const fetchMovies=async()=>{
    const movieSearch = "titanic"
    try{
    const response = await MovieApi.get(`?apikey=${APIKEY}&s=${movieSearch}&type=movie`)
       
       dispatch(addMovies(response.data))
    }catch(err){
      console.log(err, "err")
    }
  }
  fetchMovies()
})
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  )
}

export default Home