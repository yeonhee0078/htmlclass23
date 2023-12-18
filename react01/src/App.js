import logo from './logo.svg';
import './App.css';
import './1127_imgSlider/style.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from './component/home/Home'
import ImageSlide from './component/imageSlide/ImageSlide'
import Todo from './component/todo/Todo';
import Moveie from './component/movie/Movie';
import Practice from './component/practice/Practice';

function App() {


  return (
   
  <div className="App">
    <Router>
      <div style={{
        display : "flex", 
        flexDirection: "row",
        justifyContent: "space-between",
        }}>
          <div style={{
            height:"50px",
            backgroundColor : "#fff",
            width : "500px",
            lineHeight : "50px",
          }}>
            <NavLink to="/home">
              Home
            </NavLink>
          </div>
          <div style={{
            height:"50px",
            backgroundColor : "#fff",
            width : "500px",
            lineHeight : "50px",
          }}>
            <NavLink to="/imageSlide">
              ImageSlide
            </NavLink>
          </div>
          <div style={{
            height:"50px",
            backgroundColor : "#fff",
            width : "500px",
            lineHeight : "50px",
            textDecoration: "none"
          }}>
            <NavLink
            to="/Todo">
              Todo
            </NavLink>
          </div>
          <div style={{
            height:"50px",
            backgroundColor : "#fff",
            width : "500px",
            lineHeight : "50px",
            textDecoration: "none"
          }}>
            <NavLink
            to="/Movie">
              Movie
            </NavLink>
          </div>
          <div style={{
            height:"50px",
            backgroundColor : "#fff",
            width : "500px",
            lineHeight : "50px",
            textDecoration: "none"
          }}>
            {/* <NavLink
            to="/Practice">
              Practice
            </NavLink> */}
          </div>
      </div>

      <Routes>
        <Route
          exact
          path='/home'
          element={<Home />}
          />
        
        <Route
          exact
          path='/imageSlide'
          element={<ImageSlide />}
          />
        
        <Route
          exact
          path='/todo'
          element={<Todo />}
          />
        
        <Route
          exact
          path='/movie'
          element={<Moveie />}
          />

        {/* <Route
          exact
          path='/practice'
          element={<Practice />}
        /> */}
      </Routes>

        
    </Router>
  </div>

  );
}

export default App;
// absolute 는 가까운 부모를 기준으로 옮겨짐.
// relative는 자신의 위치를 기준으로 옮겨짐.
// fixed는 스크롤 해도 고정됨.