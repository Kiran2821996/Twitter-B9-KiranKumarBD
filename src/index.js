import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import Profile from './pages/Profile/Profile';
import Home from './pages/Home/Home'; 
import Login from './components/LoginOption/SignIn';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NewTweet from './components/NewTweet/NewTweet';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
   
  <React.StrictMode>
     <BrowserRouter>
  <NewTweet >
  <Routes>
    
    <Route path='/' element={<Home />}></Route>
    <Route path='/sign' element={<Login />}></Route>
    <Route path='/profile' element={ <Profile />}></Route>
  </Routes>
  </NewTweet>
  </BrowserRouter>
  </React.StrictMode>
 
 
  
);

