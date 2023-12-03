import { SetStateAction, useState } from "react";
import { Carousel } from "react-bootstrap";
import data from '../data/carousel.json'
import './carusel.css'

const HomeCarousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: SetStateAction<number>) => {
      setIndex(selectedIndex);
    };
  
    return (
        <Carousel activeIndex={index} onSelect={handleSelect} style={{color:"blue"}} >
       {data.map((slide) => {
        return (
          <Carousel.Item key={slide.id} >        
        <img
          className="d-block w-100"
          src={slide.image}
          alt="slider image"
        />
        <Carousel.Caption>
          <h3>{slide.caption}</h3>
          <p>{slide.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
        )
      })}
      
    </Carousel>
     )
       
}
 
export default HomeCarousel;