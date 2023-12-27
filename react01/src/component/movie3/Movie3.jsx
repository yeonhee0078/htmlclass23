import { useEffect, useState } from "react";
const APIKEY = 'e8fedd3e5c9cd182150f07659d5eea0f';
const NOWPLAYING_API = `https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKEY}&language=ko&page=1&region=KR`;
const IMG_API = `https://image.tmdb.org/t/p/w780`;


const Movie3 = () => {

    
    const [movieInfos, setMovieInfos] = useState([]);

    useEffect(() => {
        getMovieInfos();

    },[]);


    const getMovieInfos = async () => {
        const res = await fetch(NOWPLAYING_API);
        const data = await res.json();
        setMovieInfos(data.results);
    }
    console.log(movieInfos);
    


    

    return(
        <div>
            <div className="container">
                {movieInfos.map(movieInfo => 
                <div>
                <p>{movieInfo.title}</p>       
                <p>{movieInfo.overview}</p>       
                <img src={IMG_API+movieInfo.backdrop_path} />   
                </div>    
                )}
            </div>
        </div>
    );
}

export default Movie3;