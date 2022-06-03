import { Card } from "react-bootstrap";
import  ItemCount  from "../ItemCount/ItemCount.js"
import React from 'react';
import { toast } from 'react-toastify';
import { Button } from "bootstrap";
import { Link } from "react-router-dom";

const CardBoots = ({nombre, imagen, precio, id}) => {
    
    const agregarCarrito = (contador) =>{        
        toast(`Agregaste ${contador} ${nombre}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            })
}

return(   
     
        <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src=  {` ./${imagen} ` } />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title> 
                <Card.Text>
                    ${precio} 
                </Card.Text>
                <Button className="botonContador" variant="secondary"> <Link to={`/producto/${id}`}>
                    Ver detalle 
                </Link></Button>
                <ItemCount agregarCarrito={ agregarCarrito } cantidad={10} /> 
            </Card.Body>
        </Card>
       
    )
}

export default CardBoots;
