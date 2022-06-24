import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import '../module/singleForm.css'
import { Slide } from 'react-slideshow-image';

import image1 from '../assets/images/krg-logo.png';
import image2 from '../assets/images/krg-logo.png';
import image3 from '../assets/images/logo.png';

const slideImages = [
  {
    url: 'https://oms-pic.s3.amazonaws.com/User65/Form58/61d6b9d7-1304-4328-9fc3-bc47be6da12e3652137538295817176.jpg',
  },
  {
    url: 'https://oms-pic.s3.amazonaws.com/User65/',
  },
  {
    url: 'https://oms-pic.s3.amazonaws.com/User65/Form58/2f3550f9-252c-4399-bca7-e8674e3024c48271617012973891555.jpg',
  },
];

const edit={
  infinite:false,
  autoplay: false,
  transitionDuration: 600
}

const SingleForm = () => {
  return (
    <div>
      
      <div className="col-61 mx-auto" >
          <div className="card1" style={{backgroundColor: "white" , boxShadow:"rgba(149, 157, 165, 0.2) 0px 8px 24px" , borderRadius:"15px" ,   margin: "auto"}}>

          <div className="slide-container">
        <Slide {...edit}>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div style={{'backgroundImage': `url(${slideImage.url})`}}>
              </div>
            </div>
          ))} 
        </Slide>
      </div>

         
    </div>
    
    </div>
      <div className="row">
        
        <div className="col-12" style={{marginTop: "40px"}} >
      
            <div className="card" style={{backgroundColor: "white" , boxShadow:"rgba(149, 157, 165, 0.2) 0px 8px 24px" , borderRadius:"15px" ,   margin: "auto"}}>
            <div className="card__body"> 
            
            <h3>Title: </h3>
            <br/>
            <h3>Issue Type: </h3>
            <br/>
            <h3>Department: </h3>
            <br/>
            </div>

            </div>
        </div>
      </div>
    </div>
   
  )
}

export default SingleForm;