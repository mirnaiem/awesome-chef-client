import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Chef from './Chef/Chef';
import Footer from '../../shared/footer/Footer';

const Home = () => {

 const chefs=useLoaderData()
 console.log(chefs)
 return (
  <div className="bg-[url('https://img.freepik.com/free-photo/top-view-fresh-vegetables-with-greens-seasonings-dark-space_140725-76231.jpg?w=1060&t=st=1683866286~exp=1683866886~hmac=757d6268a105c7a38232b1c5c44f28599f453211d2f4aa8c03223f7c3e3a113e')] h-screen  bg-cover bg-no-repeat bg-center  ">
   <div className='flex items-center text-white w-4/5 mx-auto h-screen'>
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
    <h2 className='text-center text-5xl mt-10'>Our Chefs</h2>
   <div className='w-90 mx-auto'>
    <div className='grid  grid-cols-3 my-10 w-90 mx-auto'>{chefs.map(chef=><Chef key={chef.id} chef={chef}></Chef>)}</div>
   </div>
    <h2 className='text-center text-5xl'>Food Categories</h2>
   <div className='w-90 mx-auto flex gap-3'>
   <div className="card card-compact w-80 bg-base-100 shadow-xl mt-5 ">
    <h2 className="card-title my-4">Shorshe Ilish</h2>
  <figure><img src='https://bit.ly/42PpfJi' /></figure>
    <p className='my-4'>Shorshe ilish is a Bengali dish, native to the Bengal region of the Indian subcontinent, made from hilsa or Tenualosa ilisha, a type of herring, cooked in mustard gravy. The dish is popular among the people of Bangladesh where the fish is mainly found and in the neighbouring Indian states of West Bengal, Tripura and Assam's Barak valley</p>
  
  </div>
   <div className="card card-compact w-80 bg-base-100 shadow-xl mt-5 ">
    <h2 className="card-title my-4">Kacchi Biriyani</h2>
  <figure><img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy4cX6gIWmhwZEgmUHG8l9vC5OPvrNQKyLoDIYxNZE9IbcVjRACHfJsfY4&s' /></figure>
    <p className='my-4'> Jump to Recipe  Print Recipe
Kacchi Mutton Biryani is a delicious rice dish where tender goat or lamb meat pieces are marinated with lots of fried onions, whole spices, fresh herbs and yoghurt. This marinated meat sits on the bottom of the pot topped with half-cooked rice which is drizzled with saffron-infused water and more fried onions and fresh mint leaves. Sealed and slow-cooked in an oven or on stove-top to a delicious aromatic finger-licking biryani that you may serve with some kachumber, salad, and if you are like us, more pappadoms!</p>
  
  </div>
   <div className="card card-compact w-80 bg-base-100 shadow-xl mt-5 ">
    <h2 className="card-title my-4">Beef Kala Bhuna</h2>
  <figure><img  src='https://bit.ly/42PpfJi' /></figure>
    <p className='my-4'>Shorshe ilish is a Bengali dish, native to the Bengal region of the Indian subcontinent, made from hilsa or Tenualosa ilisha, a type of herring, cooked in mustard gravy. The dish is popular among the people of Bangladesh where the fish is mainly found and in the neighbouring Indian states of West Bengal, Tripura and Assam's Barak valley</p>
  
  </div>
   <div className="card card-compact w-80 bg-base-100 shadow-xl mt-5 ">
    <h2 className="card-title my-4">Shorshe Ilish</h2>
  <figure><img src='https://bit.ly/42PpfJi' /></figure>
    <p className='my-4'>Shorshe ilish is a Bengali dish, native to the Bengal region of the Indian subcontinent, made from hilsa or Tenualosa ilisha, a type of herring, cooked in mustard gravy. The dish is popular among the people of Bangladesh where the fish is mainly found and in the neighbouring Indian states of West Bengal, Tripura and Assam's Barak valley</p>
  
  </div>
   <div className="card card-compact w-80 bg-base-100 shadow-xl mt-5 ">
    <h2 className="card-title my-4">Shorshe Ilish</h2>
  <figure><img src='https://bit.ly/42PpfJi' /></figure>
    <p className='my-4'>Shorshe ilish is a Bengali dish, native to the Bengal region of the Indian subcontinent, made from hilsa or Tenualosa ilisha, a type of herring, cooked in mustard gravy. The dish is popular among the people of Bangladesh where the fish is mainly found and in the neighbouring Indian states of West Bengal, Tripura and Assam's Barak valley</p>
  
  </div>
</div>
   </div>
 
   
  
 );
};

export default Home;