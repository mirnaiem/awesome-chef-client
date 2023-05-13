import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Chef from './Chef/Chef';


const Home = () => {

 const chefs=useLoaderData()
 
 return (
  <div className="bg-[url('https://img.freepik.com/free-photo/top-view-fresh-vegetables-with-greens-seasonings-dark-space_140725-76231.jpg?w=1060&t=st=1683866286~exp=1683866886~hmac=757d6268a105c7a38232b1c5c44f28599f453211d2f4aa8c03223f7c3e3a113e')] h-screen  bg-cover bg-no-repeat bg-center  ">
   <div className='flex flex-col gap-5 lg:gap-0 lg:flex-row items-center text-white w-4/5 mx-auto h-screen  py-5 lg:py-0'>
    <div className='lg:grow'>
     <h2 className='text-5xl'>We are offering <br /> awesome food  <br /> recipe!!</h2>
     <button className='btn btn-primary my-5'>Buy Now</button>
    </div>
     <div className="carousel h-3/5 lg:w-2/5 lg:h-2/5 rounded-lg">
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
    <h2 className='text-center text-5xl mt-10'>Our Chefs</h2>
   
    
    <div className='grid w-90  mx-auto grid-cols-1 lg:grid-cols-3  my-10 '>{chefs.map(chef=><Chef key={chef.id} chef={chef}></Chef>)}</div>
    
  
    <h2 className='text-center text-5xl'>Favorite Dishes</h2>
   <div className='w-90 mx-auto flex flex-col lg:flex-row gap-3'>
   <div className="card mx-auto  w-4/5 lg:w-80 card-compact  bg-base-100 shadow-xl mt-5 p-3">
    <h2 className="card-title my-4">Shorshe Ilish</h2>
  <figure><img className='h-52 w-60' src='https://bit.ly/42PpfJi' /></figure>
    <p className='my-4'>Shorshe ilish is a Bengali dish, native to the Bengal region of the Indian subcontinent, made from hilsa or Tenualosa ilisha, a type of herring, cooked in mustard gravy. The dish is popular . </p>
  
  </div>
   <div className="card card-compact mx-auto  w-4/5 lg:w-80 bg-base-100 shadow-xl mt-5 p-3">
    <h2 className="card-title my-4">Kacchi Biriyani</h2>
  <figure><img className='h-52 w-60' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy4cX6gIWmhwZEgmUHG8l9vC5OPvrNQKyLoDIYxNZE9IbcVjRACHfJsfY4&s' /></figure>
    <p className='my-4'> Jump to Recipe  Print Recipe
Kacchi Mutton Biryani is a delicious rice dish where tender goat or lamb meat pieces are marinated with lots of fried onions, whole spices, fresh herbs and yoghurt. This marinated meat !</p>
  
  </div>
   <div className="card card-compact mx-auto  w-4/5 lg:w-80 bg-base-100 shadow-xl mt-5 p-3">
    <h2 className="card-title my-4">Beef Kala Bhuna</h2>
  <figure><img className='h-52 w-60' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWXcYBLyjbn0l0FJGrue5xAmHpPSjYYNEy21jRIxEpd03J3JYiDkzf&usqp=CAE&s' /></figure>
    <p className='my-4'>Shorshe ilish is a Bengali dish, native to the Bengal region of the Indian subcontinent, made from hilsa or Tenualosa ilisha, a type of herring, cooked in mustard gravy. </p>
  
  </div>
   <div className="card card-compact mx-auto  w-4/5 lg:w-80 bg-base-100 shadow-xl mt-5 p-3">
    <h2 className="card-title my-4">Bhuna Khichuri </h2>
  <figure><img className='h-52 w-60' src='https://i0.wp.com/cookingcanary.com/wp-content/uploads/2022/02/Bengali-Bhuna-Khichuri.jpg?w=600&ssl=1 ' /></figure>
    <p className='my-4'>Bhuna khichuri is of course drier than the regular khichuri although it has a moist texture and is filled with flavors from the dry roasted mung beans, mustard oil, a few spices and ghee. If you can’t get hold of mung beans you can also use red lentils.</p>
  
  </div>
   <div className="card card-compact mx-auto  w-4/5 lg:w-80 bg-base-100 shadow-xl mt-5 p-3">
    <h2 className="card-title my-4">Sheek Kebab with Naan</h2>
  <figure><img className='h-52 w-60' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTntbyaxLtqSizTaEFT2WiHdcdba5ETuYYSWSNglSLFGOUitshDJ-NF&usqp=CAE&s' /></figure>
    <p className='my-4'>Seekh kebab with naan is a popular dish in Bradford and can be enjoyed with rice, Naan or both. It is made from lamb or veal and is served with yoghurt or mint chutney.</p>
  
  </div>
</div>
<h2 className='text-center text-5xl my-10'>About Us</h2>
<div className='w-90 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 mb-10'>
  <div className='my-auto'>
    <h2 className='text-3xl'>Awesome Chef</h2>
    <p>Awesome is a food company. We are offering delicious food that are made by our Awesome Chefs. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos voluptatem, magni, recusandae sapiente corrupti molestiae praesentium nisi itaque cupiditate sit quod fuga voluptatibus nostrum aliquam vitae placeat enim officia consequuntur quis sunt! Qui maxime minima voluptas voluptatum delectus quia ea labore eius eligendi nostrum dolor impedit numquam unde, veritatis, inventore harum, odit praesentium! Eaque perspiciatis, quas autem, odio illum tempora impedit ipsa modi eius quibusdam odit dolore sint non id atque necessitatibus numquam placeat optio? Beatae optio, quod neque quis voluptate odio qui. Dolore perferendis sit aspernatur, fugit impedit tempore, error, ex quas eum id ipsam quis ut maiores labore.</p>
  </div>
  <div className='grid grid-cols-2 gap-2'>
    <img className='w-96 h-64 rounded-lg' src="https://img.freepik.com/premium-photo/baked-chicken-wings-barbecue-sauce_79782-721.jpg?size=626&ext=jpg&ga=GA1.2.1419972379.1680192737&semt=ais" alt="" />
    <img className='w-96 h-64 rounded-lg' src="https://img.freepik.com/free-photo/chef-with-thumb-up-white-background_1368-2842.jpg?size=626&ext=jpg&ga=GA1.1.1419972379.1680192737&semt=sph" alt="" />
    <img className='w-96 h-64 rounded-lg' src="https://img.freepik.com/free-photo/portrait-positive-smiling-head-chef-standing-professional-restaurant-kitchen-while-looking-camera-confident-man-wearing-food-industry-white-uniform-while-preparing-delicious-meal_482257-40117.jpg?size=626&ext=jpg&ga=GA1.1.1419972379.1680192737&semt=sph" alt="" />
    <img className='w-96 h-64 rounded-lg' src="https://img.freepik.com/premium-photo/tandoori-chicken-is-chicken-dish-prepared-by-roasting-chicken-marinated-yogurt-spices-tandoor-clay-oven-served-with-onion-green-chutney_466689-77620.jpg?size=626&ext=jpg&ga=GA1.1.1419972379.1680192737&semt=ais" alt="" />
  </div>
</div>

   </div>
 
   
  
 );
};

export default Home;