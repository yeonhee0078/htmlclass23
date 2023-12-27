import "./style.css"
import "../../portfolio.css"
import { useState } from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
// import "../../product.json";

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




const Uxui = () => {

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
          <Card className="card" 
          style={{ 
            borderRadius: "20px",
            boxShadow: "none"
            }}>
            <div className="cardImage">
              <img src="https://file.notion.so/f/f/a3bcee30-0ae7-413f-a497-67a8c0e732e0/11fbd301-2bac-44bd-9278-4468a25bc052/uxui_img_1.png?id=aaa5e502-cde6-42de-b1e7-0e8c8f57fa4f&table=block&spaceId=a3bcee30-0ae7-413f-a497-67a8c0e732e0&expirationTimestamp=1703808000000&signature=qTFMt0AtyYz0fYivJ2lqcWj65U2t84VCK1Gy3ahXpIA&downloadName=uxui_img_1.png" />
            </div>
            <div className="cardContent">
              <div className="textBox">
                <Typography className="cardTitle">
                포토&포스터 키오스크
                </Typography>
                <Typography className="cardSmallText" variant="body2">
                신규로 추가된 키오스크의 화면 구성부터 디자인까지 진행한 ui입니다
                </Typography>
              </div>
              {/* <div className="moreButton" onClick={handleOpen}>More</div> */}
            </div>
          </Card>
          <Card className="card" 
          style={{ 
            borderRadius: "20px",
            boxShadow: "none"
            }}>
            <div className="cardImage">
              <img src="https://file.notion.so/f/f/a3bcee30-0ae7-413f-a497-67a8c0e732e0/34a79fdd-7d63-46d5-904c-36b86b039a61/uxui_img_2.png?id=fd255706-b66f-4eb7-bd1b-ac80debce3f2&table=block&spaceId=a3bcee30-0ae7-413f-a497-67a8c0e732e0&expirationTimestamp=1703808000000&signature=11ymPlXoOwfzanvbHLeiiIh9uysYC90jc1LjH5kRy_0&downloadName=uxui_img_2.png" />
            </div>
            <div className="cardContent">
              <div className="textBox">
                <Typography className="cardTitle">
                  폴럽 이글루
                </Typography>
                <Typography className="cardSmallText" variant="body2">
                자사 메인 서비스인 폴럽 이글루의 홈화면, 편집기능, 신규 기능 등을 작업하였습니다.
                </Typography>
              </div>
              {/* <div className="moreButton" onClick={handleOpen}>More</div> */}
            </div>
          </Card>
          <Card className="card" 
          style={{ 
            borderRadius: "20px",
            boxShadow: "none"
            }}>
            <div className="cardImage">
              <img src="https://file.notion.so/f/f/a3bcee30-0ae7-413f-a497-67a8c0e732e0/868aebeb-36fe-4f1a-82b1-bd20a7e91e96/uxui_img_3.png?id=134abcfb-5935-43cd-9232-ab30d0ef4634&table=block&spaceId=a3bcee30-0ae7-413f-a497-67a8c0e732e0&expirationTimestamp=1703808000000&signature=OlGuq75urWFkqjHkoTlDd4bj1qZtyRwJMd-LrOIhq-Y&downloadName=uxui_img_3.png" />
            </div>
            <div className="cardContent">
              <div className="textBox">
                <Typography className="cardTitle">
                  카드메이커 키오스크
                </Typography>
                <Typography className="cardSmallText" variant="body2">
                신규로 진행하는 키오스크의 기획, 제품 틀, 키오스크 랩핑등 모든 과정을 기획 및 디자인하였습니다.
                </Typography>
              </div>
              {/* <div className="moreButton" onClick={handleOpen}>More</div> */}
            </div>
          </Card>
          <Card className="card" 
          style={{ 
            borderRadius: "20px",
            boxShadow: "none"
            }}>
            <div className="cardImage">
              <img src="https://file.notion.so/f/f/a3bcee30-0ae7-413f-a497-67a8c0e732e0/fb91e9c1-9319-4dd5-a68c-9ab4709dcb77/uxui_img_4.png?id=ddd1554d-59b6-493d-8819-e04756016c12&table=block&spaceId=a3bcee30-0ae7-413f-a497-67a8c0e732e0&expirationTimestamp=1703808000000&signature=hsIX4SJnWYSa7Hu5jveF-lWhHHpnGcYc9jFTNRbB09Q&downloadName=uxui_img_4.png" />
            </div>
            <div className="cardContent">
              <div className="textBox">
                <Typography className="cardTitle">
                  홈페이지 리뉴얼
                </Typography>
                <Typography className="cardSmallText" variant="body2">
                자사 홈페이지 리뉴얼 작업으로, UI 디자인 뿐만 아니라 현재의 사업방향과 맞게 내용도 기획하였습니다.
                </Typography>
              </div>
              {/* <div className="moreButton" onClick={handleOpen}>More</div> */}
            </div>
          </Card>


        </div>


      </div>
  
    );
}

export default Uxui;