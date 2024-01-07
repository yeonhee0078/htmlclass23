import './portfolio.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

// import logo from './logo.svg';
// import './App.css';
// import './1127_imgSlider/style.css';
import Home from './component/home/Home'
import About from './component/about/About'
import Uxui from './component/uxui/Uxui'
import Product from './component/product/Product'
// import ImageSlide from './component/imageSlide/ImageSlide'
// import Todo from './component/todo/Todo';
// import Moveie from './component/movie/Movie';
// import Movie2 from './component/movie2/Movie2';
// import Movie3 from './component/movie3/Movie3';
// import Movie4 from './component/movie4/Movie4';

function App() {


  return (
   
  <div className="App">
    <Router>
      <div className='navigationBar'>
        <div className='pageHome'>
          <div className='img' />
          <NavLink className='pageName' to="/">
            Portfolio
          </NavLink>
        </div>
        <div className='pages'>
          <NavLink className='pageName' to="/about">About</NavLink>
          <NavLink className='pageName' to="/uxui">UX & UI</NavLink>
          <NavLink className='pageName' to="/product">Product</NavLink>
        </div>
        {/* <div>About</div>
        <div>UX UI</div>
        <div>Product & Pacage</div>
        <div>etc.</div> */}
      </div>
      
      <Routes>
        <Route
          exact
          path='/'
          element={<Home />}
          />
        <Route
          exact
          path='/uxui'
          element={<Uxui />}
          />
        <Route
          exact
          path='/product'
          element={<Product />}
          />
        <Route
          exact
          path='/about'
          element={<About />}
          />
      
      </Routes>
    </Router>
    <>
    {/* <Router>
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
            <NavLink
            to="/Movie2">
              Movie2
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
            to="/Movie3">
              Movie3
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
            to="/Movie4">
              Movie4
            </NavLink>
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
        <Route
          exact
          path='/movie2'
          element={<Movie2 />}
          />
        <Route
          exact
          path='/movie3'
          element={<Movie3 />}
          />
        <Route
          exact
          path='/movie4'
          element={<Movie4 />}
          />

      </Routes>

        
    </Router> */}
    </>
  </div>

  );
}

export default App;
// absolute 는 가까운 부모를 기준으로 옮겨짐.
// relative는 자신의 위치를 기준으로 옮겨짐.
// fixed는 스크롤 해도 고정됨.