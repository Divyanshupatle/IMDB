import {Link} from 'react-router-dom'
// export default function Banner(){
//     return(
//         <div className="h-[65vh] bg-cover bg-center flex items-end justify-center bg-[url(https://i0.wp.com/thefutureoftheforce.com/wp-content/uploads/2025/04/Mission-Impossible-The-Final-Reckoning-Header-FUTURE-OF-THE-FORCE.jpg?fit=1024%2C576&ssl=1)]">
//             <div className=" text-2xl">Title gose hear</div>
//         </div>
//     )
// }

export default function Banner() {
  return (
    <div
      className="relative h-[65vh] bg-cover bg-center flex items-center justify-start px-10"
      style={{
        backgroundImage:
          "url(https://i0.wp.com/thefutureoftheforce.com/wp-content/uploads/2025/04/Mission-Impossible-The-Final-Reckoning-Header-FUTURE-OF-THE-FORCE.jpg?fit=1024%2C576&ssl=1)",
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
