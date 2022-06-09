import React from 'react';
import { Carousel } from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
import '../module/singleForm.css'

import image1 from '../assets/images/krg-logo.png';
import image2 from '../assets/images/krg-logo.png';
import image3 from '../assets/images/logo.png';

const SingleForm = () => {
  return (
    <div>
      
      <div className="col-6 mx-auto" >
          <div className="card" style={{backgroundColor: "rgb(39, 39, 39)" , boxShadow:"rgba(149, 157, 165, 0.2) 0px 8px 24px" , borderRadius:"15px"}}>

           
          <Carousel d>
          <Carousel.Item >
            <img
              className="d-block w-20"
              src={image1}
              alt=""
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-20"
              src={image2}
              alt=""
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-20"
              src={image3}
              alt=""
            />
          </Carousel.Item>
        </Carousel>
    </div>
    </div>
    </div>
   
  )
}

export default SingleForm;