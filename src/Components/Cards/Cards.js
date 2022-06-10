import { Card, Button } from "react-bootstrap";
import  ItemCount  from "../ItemCount/ItemCount.js"
import React from 'react';
import { useContext } from "react";
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
import { CarritoContexto } from "../../Contexto/CarritoContexto.js";

const CardBoots = ({nombre, imagen, precio, id, contador, setMostrarBoton}) => {
    const { agregarAlCarrito } = useContext(CarritoContexto)

    const agregarCarrito = (contador) =>{        
        toast(`Agregaste ${nombre}`, {
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
                    agregarAlCarrito= { agregarAlCarrito } 
                />
                <Button className="contenedorContador"
                variant="primary" 
                onClick={ () => {agregarCarrito (contador) ; agregarAlCarrito({imagen, nombre, precio}) } } 
                disabled={contador === 0} > 
                Agregar 
            </Button>              
            </Card.Body>
        </Card>
       
    )
}

export default CardBoots;
