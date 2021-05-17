import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import img0 from '../../img-jpg/prueba-0.jpg';
import img1 from '../../img-jpg/prueba-2.jpg';
import img2 from '../../img-jpg/prueba-1.jpg';
import img3 from '../../img-jpg/prueba-3.jpg';

export default function PictureSlide(props) {
    return(
        <div>
            <Carousel>
                <Carousel.Item>
                    <img src={img0} alt='img0' className='Photos' />
                    <Carousel.Caption>
                        <h3>Foto de prueba 0</h3>
                        <a>Estoy probando si les gusta</a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={img1} alt='img1' className='Photos' />
                    <Carousel.Caption>
                        <h3>Foto de prueba 1</h3>
                        <a>Estoy probando si les gusta</a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={img2} alt='img2' className='Photos' />
                    <Carousel.Caption>
                        <h3>Foto de prueba 2</h3>
                        <a>Estoy probando si les gusta</a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={img3} alt='img3' className='Photos' />
                    <Carousel.Caption>
                        <h3>Foto de prueba 3</h3>
                        <a>Estoy probando si les gusta</a>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}