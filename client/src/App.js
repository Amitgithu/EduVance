import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Signup from "./components/Signup";
import Course from './components/Course'; 
import EditProfile from "./components/EditProfile";
import NotFound from "./components/NotFound";
import Contact from "./components/Contact";
import ForgotPassword from "./components/Forgotpassword";



function App() {
   
    return (
        <Router>
            <Header/>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About />}/>
                <Route path="/contact" element={<Contact />}/>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup/>} /> 
                <Route path="/courses" element={<Course/>} />  
                <Route path="/edit-profile/:userId" element={<EditProfile />} />
                <Route path="/forgotpassword" element={<ForgotPassword />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
