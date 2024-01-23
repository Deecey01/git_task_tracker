// import Navbar from './Navbar.js';

// function App() {
//   const title="Welcome to the app";
//   const likes=100;
//   const link="https://www.google.com";
//   return (
//     <div className="App">
//       <Navbar/>
//       <div className="content">
        
//         {/* <h1>App Content</h1> */}
//         <h1>{title}</h1>
//         <p>Liked by {likes}</p>
//         <p>{[1,2,3,4,5]}</p>
//         <p>{"Hello folks!"}</p>
//         <p>{Math.random()*10}</p>

//         <a href={link}>Google site</a>
//       </div>
//     </div>
//   );
// }
// export default App;



// import Navbar from './Navbar';
// import Home from './Home';

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <div className="content">
//         <Home />
//       </div>
//     </div>
//   );
// }
// export default App;



import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route path='/create' element={<Create />}></Route>
            <Route path='/blogs/:id' element={<BlogDetails />}></Route>
            <Route path='*' element={<NotFound/>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;