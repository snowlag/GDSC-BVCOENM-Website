import React from 'react'
import { Carousel } from 'react-bootstrap';

export default function index({ events }) {
    return (
        <div>
            <Carousel>
               {events && events.map((event , index) => (
                    <Carousel.Item  interval={1500}>
                   
                    <img
                        className="d-block w-100 "
                        src="/images/image.png"
                        alt="First slide"
                        heigth="500px"
                    />
                    <Carousel.Caption>
                        <h3>{event.name}</h3>
                    </Carousel.Caption>
                    
                </Carousel.Item>
               ))}
               

               
            </Carousel>
        </div>
    )
}
