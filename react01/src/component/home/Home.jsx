import "./style.css"
import { useState } from 'react';
import { useEffect } from 'react';

const Home = () => {


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
      </div>
  
    );
}

export default Home;