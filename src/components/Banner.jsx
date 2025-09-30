import {Link} from 'react-router-dom'
import axios from 'axios';
import {useEffect, useState} from 'react'
// export default function Banner(){
//     return(
//         <div className="h-[65vh] bg-cover bg-center flex items-end justify-center bg-[url(https://i0.wp.com/thefutureoftheforce.com/wp-content/uploads/2025/04/Mission-Impossible-The-Final-Reckoning-Header-FUTURE-OF-THE-FORCE.jpg?fit=1024%2C576&ssl=1)]">
//             <div className=" text-2xl">Title gose hear</div>
//         </div>
//     )
// }

export default function Banner() {
  const [url, setUrl] = useState("");
  const imageurls = [ 'https://image.tmdb.org/t/p/original/1BpjcVIztlsk0mym7OLF6CW97eh.jpg',
    'https://image.tmdb.org/t/p/original/zxi6WQPVc0uQAG5TtLsKvxYHApC.jpg',
    'https://image.tmdb.org/t/p/original/28zX1DO1NJWeS1e573lSJQ9kiVh.jpg',]

    useEffect(()=>{
      function randomImage(){
        const randoNum = Math.floor(Math.random() * imageurls.length);
        // const newUrl = await axios.get(imageurls[randoNum]);

        setUrl(imageurls[randoNum])
      }

      randomImage();
    }, [])
  return (
    <div
      className="relative h-[65vh] bg-cover bg-center flex items-center justify-start px-10"
      style={{
        backgroundImage:
          `url(${url})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

      {/* Content */}
      <div className="relative max-w-xl text-white space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
          Mission: Impossible – The Final Reckoning
        </h1>
        <p className="text-gray-200 text-lg drop-shadow-md hidden sm:block">
          Ethan Hunt faces his most dangerous mission yet. The end begins here.
        </p>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <button className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold shadow-md transition">
            ▶ Play
          </button>
          <Link to={"/WatchList"}><button className="px-5 py-2 bg-gray-800/70 hover:bg-gray-700 text-white rounded-lg font-medium shadow-md transition">
            + Watchlist
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
