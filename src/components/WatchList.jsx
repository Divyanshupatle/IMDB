import { useState, useEffect } from "react";
import { genreids } from "../utility/genre";

export default function WatchList({movieList, setMovieList}) {
  const [search, setSearch] = useState("")
  const [genre, setGenre] = useState([]);


  // sorting watchList by Ratings
  function handleAscending(){
    let accMovieList = movieList.sort((movieObjA, movieObjB) =>(movieObjA.vote_average - movieObjB.vote_average));
    setMovieList([...accMovieList]);
  }

  function handleDescending(){
    let DescMovieList = movieList.sort((movieObjA, movieObjB) =>(movieObjB.vote_average - movieObjA.vote_average));
    setMovieList([...DescMovieList]);
  }

  // sorting watchList by popularity
  function handleAscendingPopularity(){
    let ascePopularity = movieList.sort((movieObjA, movieObjB) =>(movieObjA.popularity - movieObjB.popularity));
    setMovieList([...ascePopularity]);
  }
  function handleDscendingPopularity(){
    let dscePopularity = movieList.sort((movieObjA, movieObjB) =>(movieObjB.popularity - movieObjA.popularity));
    setMovieList([...dscePopularity]);
  }

  useEffect(()=>{
   let newGenre = movieList && movieList.map((movie) =>{
      return genreids[movie.genre_ids[0]]
    })

    const uniqueGenre = new Set(newGenre);

    setGenre(["All Genres", ...uniqueGenre]);
    console.log(genre);
  }, [movieList]);
  console.log(genre);

  
  return (

    <div className="p-6">
        {/* search bar */}
        <div className="flex justify-center my-8" type="text">
            <input placeholder="Search Movies" className=" h-[3rem] w-[18rem] bg-gray-200 px-4 outline-none border border-slate-600"
              onChange={(e)=> setSearch(e.target.value)}
            />
        </div>
      
      
      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-700">
          {/* Header */}
          <thead className="bg-gray-100 text-gray-900">
            <tr>
              <th className="px-6 py-4 font-medium">Poster</th>
              <th className="px-6 py-4 font-medium">Name</th>
              <th className="px-6 py-4 font-medium">
                <i onClick={handleAscending} className="fa-solid fa-arrow-up m-2"></i>
                Ratings
                <i onClick={handleDescending} className="fa-solid fa-arrow-down m-2"></i>
              </th>
              <th className="px-6 py-4 font-medium">
                <i onClick={handleAscendingPopularity} className="fa-solid fa-arrow-up m-2"></i>
                Popularity
                <i onClick={handleDscendingPopularity} className="fa-solid fa-arrow-down m-2"></i>
                </th>
              <th className="px-6 py-4 font-medium">Genre</th>
              <th className="px-6 py-4 font-medium">Action</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody className="divide-y divide-gray-200">
            {movieList && movieList.filter((movie)=>(
              movie.original_title.toLowerCase().includes(search.toLowerCase())
            )).map((movie, idx) => (
              <tr
                key={idx}
                className="hover:bg-gray-50 transition-colors duration-200"
              >
                {/* Poster */}
                <td className="px-6 py-4">
                  <div
                    className="h-[120px] w-[90px] rounded-md bg-cover bg-center shadow-md"
                    style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})`}}
                  ></div>
                </td>

                {/* Name */}
                <td className="px-6 py-4 font-semibold text-gray-900">
                  {movie.original_title}
                </td>

                {/* Ratings */}
                <td className="px-6 py-4">
                  <span className="inline-flex items-center rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-700">
                    ⭐ {movie.vote_average}
                  </span>
                </td>

                {/* Popularity */}
                <td className="px-6 py-4">{movie.popularity}</td>

                {/* Genre */}
                <td className="px-6 py-4">
                  <span className="inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700">
                    {genreids[movie.genre_ids[0]]}
                  </span>
                </td>

                {/* Action */}
                <td className="px-6 py-4">
                  <button className="rounded-md bg-red-500 px-3 py-1 text-xs font-semibold text-white shadow hover:bg-red-600 transition">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
