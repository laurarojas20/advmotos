import { Container, Button } from "react-bootstrap"
import ItemCount from "../ItemCount/ItemCount"
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
import { useState } from "react";

const ItemDetail = ({descripcion}) => {
    const [mostrarBoton, setMostrarBoton ] = useState(false)

    const agregarCarrito = (contador) =>{        
        toast(`Agregaste ${contador} ${descripcion.nombre}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            })
            

}

    return (
    <Container>
        <div className="ContenedorDetalle">
            <div className="Imagenes">
            <img src= {` ${descripcion.img} ` } alt = {` ${descripcion.nombre} ` } />
            </div>
            <div className="Nombre">
                <h3> {descripcion.nombre} </h3>
                <hr/> 
                <h4> ${descripcion.precio} </h4>
            
        {mostrarBoton === false ? 
            <ItemCount  
            agregarCarrito={ agregarCarrito } 
            cantidad={10}
            setMostrarBoton={ setMostrarBoton }
            />
        :
            <Button variant="dark"><Link to={`/carrito`}> Pagar </Link></Button>            
        }

            <hr /> 
                <h3> Descripción </h3>
        <p>
            {descripcion.descripcion}
        </p>    
        <div>
        
                 
            
        </div>

            </div>
        </div>
    </Container>
    )
}

export default ItemDetail