import { useState, useEffect } from "react"
import NavBar from "./components/NavBar"
import WatchList from "./components/WatchList"
import Movies from "./components/Movies"
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  const [movieList, setMovieList] = useState([]);

  useEffect(()=>{
    // setMovieList(localStorage.getItem());
    setMovieList([] || JSON.parse(localStorage.getItem("wlMovies")));
  }, [])

    function removeFromWatchList(movie){
      console.log("cliked")
      const updatedMovieList = movieList.filter(item => item.id !== movie.id);
      setMovieList(updatedMovieList);
      localStorage.setItem("wlMovies" , JSON.stringify(updatedMovieList))
    }

    function addToMovieWatchList(movie){
      for(let i=0; i<movieList.length; i++){
        if(movieList[i].id === movie.id){
          return;
        }
      }

        setMovieList([...movieList, movie]);
        localStorage.setItem("wlMovies" , JSON.stringify(movieList))
    }

  return (
    <div>
      <BrowserRouter>
        < NavBar/>
        <Routes>
          <Route path="/" element={<Movies movieList={movieList} addToMovieWatchList={addToMovieWatchList} removeFromWatchList={removeFromWatchList} />}/>
          <Route path="/WatchList" element={<WatchList movieList={movieList}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
