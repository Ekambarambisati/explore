import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Components/login';
import Register from './Components/register';
import Header from './Header';
import {HashRouter, Route,Routes,Link} from 'react-router-dom';
import Home from './Components/home';
import Sharelist from './Components/sharing';
import Productlist from './Components/productlist';
import Sidebar from './Components/sidebar';


function App() {
  return (
   <HashRouter>
   <Header/>
   <Sidebar/>
    <Routes>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/register" element={<Register/>}/>
      <Route exact path="/productlist" element={<Home/>}/>
      <Route exact path="/productlist" element={<Productlist/>}/>
      <Route exact path="/sharing" element={<Sharelist/>}/>
      
    </Routes>
   </HashRouter>
  );
}

export default App;
