import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from '../Components/header';
import Home from '../Components/home';
import Signup from '../Components/signup';
import Bresecose from '../Components/bresecose';
import Login from '../Components/login';
import Order from '../Components/order';
import Pastries from '../Components/pastries';
import Drinks from '../Components/drinks';
import Meat from '../Components/meat';



const AppRouter = () => {
  return (
      <BrowserRouter>
      <div>
      <Header></Header>
      <Routes>
      <Route exact path = "/" element= {<Home/>}></Route> 
          <Route path = "/bresecose" element={<Bresecose/>}></Route> 
          <Route  path = "/login" element= {<Login/>}></Route> 
          <Route  path = "/signup" element = {<Signup/>}></Route> 
          <Route path = "/order" element = {<Order/>}></Route>
          <Route path = "/pastries" element = {<Pastries/>}></Route>
          <Route path = "/drinks" element = {<Drinks/>}></Route>
          <Route path = "/meat" element = {<Meat/>}></Route>
          
       </Routes>
      </div>
   </BrowserRouter>
          
  );
};
export default AppRouter;