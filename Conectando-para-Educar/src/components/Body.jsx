import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Carousel } from 'react-bootstrap';

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