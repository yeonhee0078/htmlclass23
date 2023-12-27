import { useEffect, useState } from 'react';
import "./style.css"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const APIKEY = 'e8fedd3e5c9cd182150f07659d5eea0f';
const NOWPLAYING_API = `https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKEY}&language=ko&page=1&region=KR`;
const IMG_API = `https://image.tmdb.org/t/p/w780`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=${APIKEY}&query=`;

const Movie = () => {
const [movieInfoList, setMovieInfos] = useState([]);
const [movieTitle, setMovieTitle] = useState("")
const [searchedMovie, setSearchedMovie] = useState()

const getMovieInfos = async () => {        
    const res =  await fetch(NOWPLAYING_API)
    const data = await res.json();
    setMovieInfos(data.results);
}

const onSearch = async() => {

const res =  await fetch(SEARCH_API+movieTitle)
const data = await res.json()
setSearchedMovie(data.results);

console.log("검색버튼 클릭 : ", data);

}
const [open, setOpen] = useState(false);
const [detailMovie, setDetailMovie] = useState();

const handleOpen = (movieinfo) => {
    console.log(movieinfo);
    setOpen(true);
    setDetailMovie(movieinfo);
    console.log(detailMovie);
}

const handleClose = () => setOpen(false);

useEffect(()=>{
    getMovieInfos();
},[])


    return(
        <div style={{margin:10}}>
            <input type="text" placeholder='영화제목을 입력해주세요' onChange={(e)=>setMovieTitle(e.target.value)}/>

            <button onClick={onSearch}> 검색</button>
            
            <h2> Searched Movie</h2>
            {searchedMovie && (
                    <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      sx={{ height: 140 }}
                      title="green iguana"
                      />
                    {/* <img src={IMG_API+detailMovie.backdrop_path} style={{width:"100%"}}/> */}



                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                       {detailMovie?.title ?? ""}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                      {detailMovie?.overview ?? ""}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                      {/* <Button size="small" onClick={()=>handleOpen(movieinfo)}>줄거리보기</Button> */}
                    </CardActions>
                  </Card>
                // <div className="movie">
                //     <img src={IMG_API+searchedMovie[0].backdrop_path} style={{width:"100%"}}/>
                //     <div>
                //         <h4>{searchedMovie[0].title}</h4>
                //     </div>
                //     <div className='movie-over'>
                //         <h5>Overview</h5>
                //         <div style={{fontSize:"10px"}}>{searchedMovie[0].overview}</div>
                //     </div>
                // </div>
            )}

                <h2>UpComing movies</h2>
                <div className='moveContainer'>
                {movieInfoList && movieInfoList.map(movieinfo=>(
                    <div className="movie">
                        <img src={IMG_API+movieinfo.backdrop_path} style={{width:"100%"}}/>
                        <div>
                            <h4>{movieinfo.title}</h4>
                        </div>
                        <div className='movie-over'>
                            <h5>영화정보</h5>
                            <div style={{fontSize:"10px"}}>인기도 : {movieinfo.popularity}</div>
                            <div style={{fontSize:"10px"}}>평점 : {movieinfo.vote_average}</div>
                            <button onClick={()=>handleOpen(movieinfo)}>줄거리 보기</button>
                        </div>
                    </div>)
                    )}
                </div>
                <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {detailMovie?.title ?? ""}
                    {/* {detailMovie.title} */}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {detailMovie?.overview ?? ""}
                    {/* <img src={IMG_API+detailMovie.backdrop_path} style={{width:"100%"}}/> */}
                </Typography>
                </Box>
            </Modal>
        </div>
    )
}

export default Movie;