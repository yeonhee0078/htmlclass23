import "./style.css"
import "../../portfolio.css"
import { useState } from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
// import "../../product.json";
import productData from '../../productData.json';

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
            Product
          </div>
          <div className="contentText">
            키오스크 내 상품, 온라인 쇼핑몰 등에서 실제로 판매된 제품 작업물입니다.
          </div>
        </div>
         <div className="cardContainer">
          {productData.map((itData) => 
          <Card className="card"
          style={{
            boxShadow: "12px 12px 3px #7fffd4",
            borderRadius: "20px",
            backgroundColor: "#2B2B2B"
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
            border : "2px solid aquamarine",
            borderRadius : "20px",
            display : "flex",
            paddingLeft: "36px", 
            paddingTop: "40px",
            backgroundColor : "#2B2B2B",
            color : "aquamarine"
          }}>
            <div className="modal_image">
              <img src={'./image/'+detailData?.imgUrl ?? ""}
              style={{
                width: "1100px", height: "700px",
                marginRight : "55px",
                border : "2px solid aquamarine",
              }} />
            </div>
            <div className="modal_text"
            style={{
              width : "360px",
              display : "flex",
              flexDirection : "column",
              justifyContent : "space-between"
            }}>
              <Typography id="modal-modal-title" variant="h6" component="h2"
              style={{
                // marginBottom: "88px",
                font: "normal normal normal 22px Galmuri11"
              }}>
                {detailData?.title ?? ""}
              </Typography>
              <Typography 
              style={{
                // marginTop: "88px",
                font: "normal normal normal 16px Galmuri11",
                lineHeight : "30px",
              }}
              id="modal-modal-description" sx={{ mt: 2 }}>
              {detailData?.info ?? ""}
              </Typography>

              <div className="iconContainer">
              <div className="icon">
                  {detailData?.ai ? <img src="./image/icon_illustrator.png"/> : <div className="none"></div> }
                </div>
                <div className="icon">
                  {detailData?.psd ? <img src="./image/icon_photoshop.png"/> : <div className="none"></div> }
                </div>
                <div className="icon">
                  {detailData?.xd ? <img src="./image/icon_xd.png"/> : <div className="none"></div> }
                </div>
                <div className="icon">
                  {detailData?.ae ? <img src="./image/icon_aftereffect.png"/> : <div className="none"></div> }
                </div>
              </div>
              <div
              style={{
                width : "100%",
                textAlign : "right",
                marginBottom : "40px",
                justifyContent : "center"
              }}
              onClick={handleClose}
              >목록으로 돌아가기
                <img src="./image/icon_previous.png"
                style={{ 
                  marginLeft: "5px"
                }} />
              </div>
            </div>  
          </Box>
        </Modal>


      </div>
  
    );
}

export default Product;