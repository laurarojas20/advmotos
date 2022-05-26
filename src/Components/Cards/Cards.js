import { Card } from "react-bootstrap";
import  ItemCount  from "../ItemCount/ItemCount.js"
import React from 'react';
import { toast } from 'react-toastify';


const CardBoots = ({nombre, imagen, descripcion, precio, cantidad}) => {
    
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
     
        <Card>
            <Card.Img variant="top" src=  {` ./${imagen} ` } />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                    {descripcion}
                </Card.Text>    
                <Card.Text>
                    ${precio} 
                </Card.Text>
                <ItemCount agregarCarrito={ agregarCarrito } cantidad={10} /> 
            </Card.Body>
        </Card>
       
    )
}

export default CardBoots;
