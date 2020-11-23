import React, {Component} from 'react';
import '../styles/CarouselItem.css';

const CarouselItem = (props) => {
  return (
      <div className = 'carouselItem'>
          <img className = 'carouselItem__image' src = {props.imgSrc} />
      </div>
  )
};

export default CarouselItem;