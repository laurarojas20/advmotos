import { Card, Button } from "react-bootstrap";
import React from 'react';
import { Link } from "react-router-dom";

const CardBoots = ({nombre, imagen, precio, id}) => {

return(       
        <Card className="col" style={{ width: '18rem', height: '90vh', marginLeft: '1%'}}>
            <Card.Img variant="top" src=  {` ${imagen} ` } style={{ paddingTop: '5%'}} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title> 
                <Card.Text>
                    ${precio} 
                </Card.Text>
                <Button className="botonContador" variant="dark"> <Link to={`/producto/${id}`}>
                    Ver detalle 
                </Link></Button>
            </Card.Body>
        </Card>       
    )
}

export default CardBoots;
