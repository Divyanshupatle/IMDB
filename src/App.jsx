import { useState, useEffect } from "react"
import NavBar from "./components/NavBar"
import WatchList from "./components/WatchList"
import Movies from "./components/Movies"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    // setMovieList(JSON.parse(localStorage.getItem("wlMovies")));
    const storedMovies = localStorage.getItem("wlMovies");
    if (storedMovies) {
      setMovieList(JSON.parse(storedMovies));
    }
  }, [])

  useEffect(() => {
    if(movieList.length > 0){
      localStorage.setItem("wlMovies", JSON.stringify(movieList))
    }
  }, [movieList])


  function removeFromWatchList(movie) {
    console.log("cliked")
    const updatedMovieList = movieList.filter(item => item.id !== movie.id);
    setMovieList(updatedMovieList);
    localStorage.setItem("wlMovies", JSON.stringify(updatedMovieList))
  }

  function addToMovieWatchList(movie) {
    if (movieList == null || movieList == undefined) {
      setMovieList([movie]);
      return;
    }
    if (movieList.some(movieItem => movieItem.id === movie.id)) return;

    setMovieList([...movieList, movie]);
    // localStorage.setItem("wlMovies" , JSON.stringify(movieList))
  }

  return (
    <div>
      <BrowserRouter>
        < NavBar />
        <Routes>
          <Route path="/" element={<Movies movieList={movieList} addToMovieWatchList={addToMovieWatchList} removeFromWatchList={removeFromWatchList} />} />
          <Route path="/WatchList" element={<WatchList movieList={movieList} setMovieList={setMovieList} removeFromWatchList={removeFromWatchList}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
