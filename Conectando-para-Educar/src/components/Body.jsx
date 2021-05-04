import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Carousel } from 'react-bootstrap';
import img0 from '../img-jpg/prueba-0.jpg';
import img1 from '../img-jpg/prueba-2.jpg';
import img2 from '../img-jpg/prueba-1.jpg';
import img3 from '../img-jpg/prueba-3.jpg';

export default function Body(props) {
    return(
        <div>
            <Card>
                <Card.Body>
                    <Card.Title>Bienvenidos</Card.Title>
                    <Card.Text>Sobre el projecto.</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}