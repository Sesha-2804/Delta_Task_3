// import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
// import Profile from "./pages/profile/Profile"
// import Register from "./pages/register/Register"
import {BrowserRouter as Router,
  Routes,
  Route,Navigate
} from "react-router-dom";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Membook from "./pages/membook/Membook";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";
import Editprofile from "./pages/editprofile/Editprofile";
// import dotenv from 'dotenv';
// dotenv.config();

function App(){
  const {user}=useContext(AuthContext)
  return(
    <Router>
      <Routes>
        <Route exact path="/editprofile" element={<Editprofile/>}/>
        <Route exact path="/" element={user?<Home/>:<Login/>}/>
        <Route exact path="/login" element={user?<Navigate to='/editprofile'/>:<Login/>}/>
        <Route exact path="/register" element={user?<Navigate to='/'/>:<Register/>}/>
        
        <Route exact path="/profile/:userId" element={<Profile/>}/>
        <Route exact path="/membook" element={<Membook/>}/>

        
      </Routes>
    </Router>
  )
}

export default App