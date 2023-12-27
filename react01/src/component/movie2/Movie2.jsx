import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';


import './style.css';
import { useEffect, useState } from 'react';

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


const Movie2 = () => {
    const [movieInfos, setMovieInfos] = useState([]);

    // 영화정보 렌더링
    useEffect(() => {
        getMovieInfos();
    },[])

    // 1st 영화 JSON 데이터 가져오기
    const getMovieInfos = async () => {
        // API 가져오기
        const res = await fetch(NOWPLAYING_API);
        // JSON 데이터 가져오기
        const data = await res.json();
        
        // 영화 정보 불러오기
        setMovieInfos(data.results);
    };

    // 데이터 잘 가져와졌는지 확인하기.
    console.log(movieInfos);

    // 모달에 넣을 디테일한 데이터
    const [open, setOpen] = useState(false);

    const [detailMovie, setDetailMovie] = useState();

    // // const handleOpen = (movieinfo) => {
    //     console.log(movieinfo);
    //     setOpen(true);
    //     //  setDetailMovie(movieinfo);
    //     // console.log(detailMovie);
    
    // }
    const handleClose = () => setOpen(false);


    return (
        <div>
            <div className="title">
                오늘의 영화
            </div>
            <div className="MovieContainer">
                {movieInfos.map(movieInfo => 
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={IMG_API+movieInfo.backdrop_path}
                        title={movieInfo.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {movieInfo.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {movieInfo.overview}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        {/* <button onClick={() => handleOpen(movieInfo)}>줄거리 보기</button> */}

                    </CardActions>
                </Card>
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
                        {/* {movieInfo.title} */}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {/* {movieInfo.overview} */}
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}

export default Movie2;