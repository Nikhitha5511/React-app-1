
   import React, { useState, useEffect } from 'react';
   import '../App.css';
   
   const images = [
     'https://media.istockphoto.com/id/1267091551/photo/asian-young-happy-family-enjoy-vacation-on-beach-in-evening.jpg?s=612x612&w=0&k=20&c=z4MdBeAjGIG30v6PYsQPZ6QQqX7Kbq1uPlC9eKYPw8Y=',
     'https://media.istockphoto.com/id/529363169/photo/mother-and-daughters-embracing-outdoors.jpg?s=612x612&w=0&k=20&c=3_1sjLQBfAE9EHYUIUWFqYCIkEOjfEox7x9gCRc15aw=',
     'https://media.istockphoto.com/id/1094440300/photo/young-hispanic-parents-piggyback-their-children-in-the-park-smiling-to-camera-focus-on.jpg?s=612x612&w=0&k=20&c=LOhqGmWGgKpbpknqtc_bWECTTVVvhZUOC-uWx95yfSo=',
   ];
   
   const Body = () => {
     const [currentImage, setCurrentImage] = useState(0);
   
     const nextSlide = () => {
       setCurrentImage((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
     };
  
     const prevSlide = () => {
       setCurrentImage((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
     };

     useEffect(() => {
       const intervalId = setInterval(() => {
         nextSlide();
       }, 3000);
   
       return () => clearInterval(intervalId);
     }, []);
   
     return (
       <div>
       <div className="carousel-container">
         <button className="prev-button" onClick={prevSlide}>{'<'}</button>
         <div className="image-container">
           <img src={images[currentImage]} alt={`Slide ${currentImage + 1}`} />
         </div>
         <button className="next-button" onClick={nextSlide}>{'>'}</button>
       </div>

       <div className='samlldiv'></div>
       <div className='textdiv'>
        <h1 className='bigtext'>Think Health. Think Massage.</h1>
        <p className='firstpara'>We are open 9am to 6pm; Monday through Sunday. If you would like to schedule an appointment</p>
        <p className='secondpara'>with us, please call us at 987-654-3210 today!</p>
        <div className='buttonflex'>
          <button className='buttonbody'>LEARN MORE ABOUT US</button>
          <button className='buttonbody'>CONTACT US TODAY</button>
        </div>
       </div>
       <div className='thirddiv'>
        <p className='firstparatext'>Are you looking for a professional, registered massage therapist? Sample Massage Therapy has 4 registered massage <br></br>therapists who can provide clinical massage.</p>
        <p className='secondparatext'>We are committed to your long term health and well-being. Our multi-disciplinary clinic provides a balanced approach to a healthy lifestyle.<br></br> Enhance your health and improve your performance with our treatments.</p>
        <p className='thirdparatext'>We welcome you to come explore all the benefits you’ll enjoy as one of our valued guests. Our professional staff is committed to offering the<br></br> best massage therapy in Mainland.</p>
        <hr></hr>
        <div className='fourthdiv'>
          <h2 className='headingpara'>Family Wellness Massage Therapy</h2>
          <p className="addresspara1">888 Griffiths Way, Mainland ML 12345</p>
          <p className="addresspara1">Tel: 987.654.3210</p>
          <p className="addresspara1">Email: info@yoursite.com</p>
        </div>
       </div>



      </div>
     );
   };
   
   export default Body;
