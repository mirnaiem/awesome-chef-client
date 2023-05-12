import React from 'react';

const Home = () => {
 return (
  <div className="bg-[url('https://img.freepik.com/free-photo/top-view-fresh-vegetables-with-greens-seasonings-dark-space_140725-76231.jpg?w=1060&t=st=1683866286~exp=1683866886~hmac=757d6268a105c7a38232b1c5c44f28599f453211d2f4aa8c03223f7c3e3a113e')] h-screen  bg-cover bg-no-repeat bg-center text-white ">
   <div className='flex items-center w-4/5 mx-auto h-screen'>
    <div className='grow'>
     <h2 className='text-5xl'>We are offering <br /> awesome food  <br /> recipe!!</h2>
     <button className='btn btn-primary my-5'>Buy Now</button>
    </div>

    
     
     
     <div className="carousel w-2/5 h-2/5 rounded-lg">
      <div id="slide1" className="carousel-item relative w-full">
       <img src="https://img.freepik.com/free-photo/indian-food-arrangement-high-angle_23-2148747620.jpg?size=626&ext=jpg&ga=GA1.1.1419972379.1680192737&semt=ais" className="w-full h-full" />
       <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide4" className="btn btn-circle">❮</a>
        <a href="#slide2" className="btn btn-circle">❯</a>
       </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
       <img src="https://img.freepik.com/free-photo/front-view-barbecue-food-dinner_23-2148301314.jpg?size=626&ext=jpg&ga=GA1.1.1419972379.1680192737&semt=ais" className="w-full h-full" />
       <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1" className="btn btn-circle">❮</a>
        <a href="#slide3" className="btn btn-circle">❯</a>
       </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
       <img src="https://img.freepik.com/premium-photo/bulgur-pilaf-cooked-wood-fire-nomadic-turkish-women_632261-7951.jpg?size=626&ext=jpg&ga=GA1.2.1419972379.1680192737&semt=ais" className="w-full h-full" />
       <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide2" className="btn btn-circle">❮</a>
        <a href="#slide4" className="btn btn-circle">❯</a>
       </div>
     

     </div>
    
     </div>
   </div>
  </div>
 );
};

export default Home;