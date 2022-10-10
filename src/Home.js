import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <div className='home_container'>
            <img className='home_image' src='https://m.media-amazon.com/images/I/717OO5QwJnL._SX3000_.jpg' alt='img'/>
           
           <div className='home_row'>
            <Product  id="12321341"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses" 
            price={29.99}
            image='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg' rating={5}/>
            
            <Product id="12321342"
            title="Samsung Galaxy Watch4 Bluetooth(4.4 cm, Black, Compatible with Android only)" 
            price={50}
            image='https://m.media-amazon.com/images/I/61Nhi7ovjkL._SX569_.jpg' 
            rating={4}/>
           </div>

           <div className='home_row'>
           <Product id="49538094"
           title="2022 Apple MacBook Air Laptop with M2 chip: 13.6-inch Liquid Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, 1080p FaceTime HD Camera" 
            price={1165}
            image='https://m.media-amazon.com/images/I/710TJuHTMhL._AC_SX522_.jpg' 
            rating={5}/>
            
           <Product id="4903850"
           title="SAMSUNG 85-Inch Class Crystal 4K UHD AU8000 Series HDR, 3 HDMI Ports, Motion Xcelerator, Tap View, PC on TV, Q Symphony, Smart TV with Alexa" 
            price={500}
            image='https://m.media-amazon.com/images/I/71LJJrKbezL._AC_SX466_.jpg' 
            rating={5}/>
           
           <Product id="23445930"
           title="Mr. Coffee 2129512, 5-Cup Mini Brew Switch Coffee Maker, Black" 
            price={19}
            image='https://m.media-amazon.com/images/I/41ppcO7H0WL._AC_.jpg' 
            rating={4}/>
           </div>
           <div className='home_row'>
           <Product   id="3254354345"
           title="Echo Dot (3rd Gen, 2018 release) - Smart speaker with Alexa - Charcoal" 
            price={100}
            image='https://m.media-amazon.com/images/I/6182S7MYC2L._AC_SL1000_.jpg' 
            rating={5}/>

            <Product id="90829332"
            title="JBL Charge 4 - Waterproof Portable Bluetooth Speaker - Black" 
            price={115}
            image='https://m.media-amazon.com/images/I/71DW6JMyCWL._AC_SL1500_.jpg' 
            rating={4}/>
           
           
           </div>
           

        </div>
    </div>
  )
}

export default Home