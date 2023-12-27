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




const Product = () => {

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
          <Card className="card" 
          style={{ 
            borderRadius: "20px",
            boxShadow: "none"
            }}>
            <div className="cardImage">
              <img src="https://file.notion.so/f/f/a3bcee30-0ae7-413f-a497-67a8c0e732e0/94704dd6-1f0f-437e-a94e-4446a02771fe/product_img_1.png?id=ac187d10-d286-4cbf-8ced-27d2671f0d8b&table=block&spaceId=a3bcee30-0ae7-413f-a497-67a8c0e732e0&expirationTimestamp=1703786400000&signature=qI8PVedNDraja9LESO876ZcG8q1WIM7QRVRRGSJtlrk&downloadName=product_img_1.png" />
            </div>
            <div className="cardContent">
              <div className="textBox">
                <Typography className="cardTitle">
                포토카드 디자인
                </Typography>
                <Typography className="cardSmallText" variant="body2">
                포토카드 키오스크에서 선택할 수 있는 포토카드 프레임 디자인입니다.
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
              <img src="https://file.notion.so/f/f/a3bcee30-0ae7-413f-a497-67a8c0e732e0/daad261a-91ea-4fe3-aa9c-cc2660e85f26/product_img_2.png?id=3ead8b5f-2ca0-4df2-a2d7-814358abbbf6&table=block&spaceId=a3bcee30-0ae7-413f-a497-67a8c0e732e0&expirationTimestamp=1703786400000&signature=_LlOZJe0-Q9HtIdCMLgBcanjyf-p-hQWZh3NVu51o7o&downloadName=product_img_2.png" />
            </div>
            <div className="cardContent">
              <div className="textBox">
                <Typography className="cardTitle">
                  산리오 컬러 네임스티커
                </Typography>
                <Typography className="cardSmallText" variant="body2">
                자사 제품과 산리오 캐릭터를 콜라보한 스티커 제품입니다.
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
              <img src="https://file.notion.so/f/f/a3bcee30-0ae7-413f-a497-67a8c0e732e0/4aa1f964-b011-49c9-bbce-ddf96311f80b/product_img_3.png?id=5e0e888c-a477-4b8d-9f7f-e53acca66e85&table=block&spaceId=a3bcee30-0ae7-413f-a497-67a8c0e732e0&expirationTimestamp=1703786400000&signature=ZmHpnFkR-mZ5BCfVASsAJGTpdBtL2Z5ffrEa33gNSt8&downloadName=product_img_3.png" />
            </div>
            <div className="cardContent">
              <div className="textBox">
                <Typography className="cardTitle">
                  미아방지밴드
                </Typography>
                <Typography className="cardSmallText" variant="body2">
                기존에 있던 제품에서 새로 디자인을 추가하였으며, 남자 어린이들을 타겟으로 한 애니멀 미아방지디자인입니다. 현재 쿠팡 로켓배송도 납품되고 자사 온라인쇼핑몰에도 판매 진행되고 있습니다.
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
              <img src="https://file.notion.so/f/f/a3bcee30-0ae7-413f-a497-67a8c0e732e0/f47fd71f-82bb-4b91-80ed-d28bb92ff81e/product_img_4.png?id=7181cb90-8ef8-4a05-a572-f72e7c99eace&table=block&spaceId=a3bcee30-0ae7-413f-a497-67a8c0e732e0&expirationTimestamp=1703786400000&signature=lT6-niIJPLeDgUTOsaFktSwD4mDffCQys_3LfWTVJhw&downloadName=product_img_4.png" />
            </div>
            <div className="cardContent">
              <div className="textBox">
                <Typography className="cardTitle">
                  키재기자 디자인
                </Typography>
                <Typography className="cardSmallText" variant="body2">
                  유치원, 초등학생 부모를 타겟으로한 키재기자 제품 디자인입니다.
                  자사 온라인몰에서 실제로 판매된 제품입니다.
                </Typography>
              </div>
              {/* <div className="moreButton" onClick={handleOpen}>More</div> */}
            </div>
          </Card>

        </div>


      </div>
  
    );
}

export default Product;