import "./style.css"
import "../../portfolio.css"
import { useState } from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
// import "../../product.json";
import uxuiData from '../../uxuiData.json';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
};




const Product = () => {
  const [open, setOpen] = useState(false);
  const [detailData, setDetailData] = useState();
  const handleOpen = (itData) => {
    console.log("data:",itData);
    setOpen(true);
    setDetailData(itData);
    console.log(detailData);
  };
  const handleClose = () => setOpen(false);



    return (
      <div className="contentBox">
        <div className="titleSection">
          <div className="contentName">
          UX & UI
          </div>
          <div className="contentText">
          키오스크 화면, 모바일, 홈페이지 등 UX / UI 작업물입니다.
          </div>
        </div>
         <div className="cardContainer">
          {uxuiData.map((itData) => 
          <Card className="card" 
          style={{ 
            borderRadius: "20px",
            boxShadow: "none"
            }}>
            <div className="cardImage">
            <img src={'./image/'+itData.imgUrl} />
            </div>
            <div className="cardContent">
              <div className="textBox">
                <Typography className="cardTitle">
                  {itData.title}
                </Typography>
                <Typography className="cardSmallText" variant="body2">
                {itData.info}
                </Typography>
              </div>
              <div className="moreButton" onClick={()=>handleOpen(itData)}>More</div>
            </div>
          </Card>
          )}

        </div>
        <Modal
          open={open}
          onClose={handleClose}
          // aria-labelledby="modal-modal-title"
          // aria-describedby="modal-modal-description"
        >
          <Box sx={style}
          className="Modal"
          style={{
            width : "1596px", height : "773px",
            border : "0px",
            borderRadius : "20px",
            display : "flex",
            paddingLeft: "36px", 
            paddingTop: "40px"
          }}>
            <div className="modal_image">
              <img src={'./image/'+detailData?.imgUrl ?? ""}
              style={{
                width: "1100px", height: "700px",
                marginRight : "55px"

              }} />
            </div>
            <div className="modal_text"
            style={{
              width : "360px"
            }}>
              <Typography id="modal-modal-title" variant="h6" component="h2"
              style={{
                marginBottom: "88px",
                font: "normal normal normal 22px Galmuri11"
              }}>
                {detailData?.title ?? ""}
              </Typography>
              <Typography 
              style={{
                marginBottom: "88px",
                font: "normal normal normal 16px Galmuri11",
                lineHeight : "30px"
              }}
              id="modal-modal-description" sx={{ mt: 2 }}>
              {detailData?.info ?? ""}
              </Typography>
            </div>  
          </Box>
        </Modal>


      </div>
  
    );
}

export default Product;