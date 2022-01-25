import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
// import Register from './components/Register'
import "bootstrap/dist/css/bootstrap.min.css";
import AllCourses from "./components/AllCourses";
import Navbar from "./components/Navbar";
import AddCourse from "./components/AddCourse";
import EditCourse from "./components/EditCourse";

function App() {
  return (

    <BrowserRouter>
    <div>
        <Navbar />
      </div>
    <Routes>
      
      <Route path = '/' element= {<Home />} />
      <Route path = '/all' element= {<AllCourses/>} />
      <Route path = '/add' element= {<AddCourse />} />
      <Route path = '/update/:id' element= {<EditCourse />} />
      {/* <Route path = '/register' element= {<Register />} /> */}

    </Routes>
    </BrowserRouter>
  );
}

export default App;
