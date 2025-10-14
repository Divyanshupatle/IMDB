
export default function MovieCard(prop){
    function doesMovieExistInWatchList(){
        for(let i=0; i<prop?.movieList?.length; i++){
            if(prop.movieList[i].id === prop.movie.id){
                return true;
            }
        }
        return false;
    }

    return(
        <div className="f">
            <div className="m-1">
                <div className="h-[45vh] w-[210px] rounded-2xl bg-cover bg-center" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${prop.movie.poster_path})`}}>
                    <div className="w-full flex justify-end">
                        {
                           doesMovieExistInWatchList() ? (
                            <div className="w-[35px] h-[25px] text-xl text-center align-middle  outline-none rounded bg-gray-600/70 mr-2 mt-2 cursor-pointer" onClick={()=>{prop.removeFromWatchList(prop.movie)}}>&#10060;</div>
                           ) : (
                            <div className="w-[35px] h-[25px] text-xl text-center align-middle  outline-none rounded bg-gray-600/70 mr-2 mt-2 cursor-pointer" onClick={()=>{prop.addToMovieWatchList(prop.movie)}}>&#128525;</div>
                           ) 
                        }
                            
                        
                    </div>
                    <div className="w-full h-full flex items-center justify-center">
                        <div className="text-white text-center text-xl rounded-lg w-full bg-gray-900/70">{prop.movie.original_title}</div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}