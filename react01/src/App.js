import logo from './logo.svg';
import './App.css';
import './1127_imgSlider/style.css';
import { useState } from 'react';
import { useEffect } from 'react';


function App() {
  const images = [
    "https://i.pinimg.com/564x/35/41/42/35414291b1111a892e76cc97c28b5a95.jpg",
    "https://i.pinimg.com/564x/9e/0b/74/9e0b749bf2d9735a689ed7956ede0e9b.jpg",
    "https://i.pinimg.com/564x/de/55/ff/de55fff64586b6e9bf8c88506080f86c.jpg",
    "https://i.pinimg.com/564x/de/55/ff/de55fff64586b6e9bf8c88506080f86c.jpg",
  ];


  const [weight, setWeight] = useState(40);
  const [height, setHeight] = useState(140);
  const [bmi, setBmi] = useState(40.2);
  const [output, setOutput] =useState();


  function onWeightChange(event) {
    console.log(event.target.value);
    setWeight(event.target.value);
  }
  // function onWeightChange (num) {
  //   console.log(num.target.value);
  // }
  
  function onHeightChange(event) {
    console.log(event.target.value);
    setHeight(event.target.value);
  }
  // function onHeightChange (num) {
  //   console.log(num.target.value);
  // }
  //  const [bmi, setBmi] = useState(20.4);

  useEffect(() => {
    setBmi(weight / (height / 100) * (height / 100));
     //document.querySelector('.yourBMI').innerHTML = bmi;
     console.log("bmi:"+bmi);
     setOutput(bmi);

  },[weight, height]);


    const [current, setCurrent] =useState(0);

    function nextSlide() {
      setCurrent(current === images.length-1 ? 0 : current + 1 );
    }

    function prevSlide() {
      setCurrent(current === 0 ? images.length-1 : current - 1 );
    }
  

  return (
    <div className="App">
      <div className="container">
        <div className="title">
          Project7 : BMI CALCULATOR
        </div>
          <div className="container2">
          <p>Weight : {weight}kg</p>
          <input type="range" 
          onChange={onWeightChange} max="120" min="30"></input>
          <p>Height : {height}cm</p>
          <input type="range"
          onChange={onHeightChange} max="200" min="120"></input>
          <p>Your BMI is</p>
        <div className="yourBMI">{output}</div>
        </div>
      </div>

      <div>
        <h2>title</h2>
        <div className='slider' onClick={prevSlide}>
          <div className='left-arrow'>
          ◀️
          </div>
          <div className='right-arrow' onClick={nextSlide}>
          ▶️
          </div>
          {images.map(
            (image, index) =>
            current===index && (
              <div key={image} className="slide">
                <img src={image} alt="images" />
              </div>
            )
          )}
          
        </div>
      </div>
    </div>

  );
}

export default App;
// absolute 는 가까운 부모를 기준으로 옮겨짐.
// relative는 자신의 위치를 기준으로 옮겨짐.
// fixed는 스크롤 해도 고정됨.