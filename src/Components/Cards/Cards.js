import { Card, Button } from "react-bootstrap";
import  ItemCount  from "../ItemCount/ItemCount.js"
import React from 'react';
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";

const CardBoots = ({nombre, imagen, precio, id, setMostrarBoton}) => {

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
     
        <Card className= 'contenedor' style={{ width: '18rem', height: '90vh'}}>
            <Card.Img variant="top" src=  {` ${imagen} ` } />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title> 
                <Card.Text>
                    ${precio} 
                </Card.Text>
                <Button className="botonContador" variant="dark"> <Link to={`/producto/${id}`}>
                    Ver detalle 
                </Link></Button>
                
                <ItemCount 
                    agregarCarrito={ agregarCarrito } 
                    cantidad={10}
                    setMostrarBoton = { setMostrarBoton }
                    agregarAlCarrito = { (imagen, nombre, precio) } 
                />
            </Card.Body>
        </Card>
       
    )
}

export default CardBoots;
