import { useEffect, useState } from "react";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import './style.css';

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


const Movie4 = () => {
    const [movieInfos, setMovieInfos] = useState([]);

    useEffect(() => {
        getMovieInfos();
    },[]);

    const getMovieInfos = async () => {
        const res = await fetch(NOWPLAYING_API);
        const data = await res.json();
        setMovieInfos(data.results);
    };

    console.log(movieInfos);


    const [movieDetail, setMovieDetail] =useState();
    const [open, setOpen] = useState(false);
    const handleOpen = (movieInfo) => {
        setOpen(true);
        setMovieDetail(movieInfo);
        console.log("movieDetail:"+movieDetail);
    }
    const handleClose = () => setOpen(false);


return(
    <div>
        <h2>UP COMMING MOVIE LIST</h2>
        <div className="movieContainer">
            {movieInfos.map(movieInfo =>                 
                <Card sx={{ maxWidth: 345 , 
                            marginLeft: "20px", 
                            marginBottom: "40px",
                            boxShadow: "5px 5px 5px rgba(0,0,0,0.15)",
                            borderRadius: "20px",
                            }}>
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
                    <Button onClick={() => handleOpen(movieInfo)}>줄거리 더 보기</Button>
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
            <img src={IMG_API+movieDetail.backdrop_path}
                 width="400px"
                 style={{
                    marginBottom: "20px",
                    borderRadius: "10px"
                 }}
                  />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {movieDetail?.title??""}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {movieDetail?.overview??""}
          </Typography>
        </Box>
      </Modal>

    </div>
);
};

export default Movie4;