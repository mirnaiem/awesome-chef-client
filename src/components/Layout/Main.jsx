import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../shared/Header/Header';
import Footer from '../shared/footer/Footer';


const Main = () => {
 return (
  <div style={{ position: "relative", minHeight: "100vh" }}>
   <Header />
   <div style={{marginBottom:'2400px'}}> 
     <Outlet />
   </div>
   <Footer style={{ position: "absolute", bottom: 0, width: "100%" }} />
  </div>
 );
};

export default Main;