import { Container, Button } from "react-bootstrap"
import ItemCount from "../ItemCount/ItemCount"
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { CarritoContexto } from "../../Contexto/CarritoContexto";

const ItemDetail = ({descripcion, contador}) => {
    const { agregarAlCarrito } = useContext(CarritoContexto)
    const [mostrarBoton, setMostrarBoton ] = useState(false)

    const agregarCarrito = (contador) =>{        
        toast(`Agregaste ${descripcion.nombre}`, {
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
            <img src= {` ${descripcion.img} ` } alt = {` ${descripcion.nombre} ` } className="anchoTotal" />
            </div>
            <div className="Nombre">
                <h3> {descripcion.nombre} </h3>
                <hr/> 
                <h4> ${descripcion.precio} </h4>
            
        {mostrarBoton === false ? 
            <div>
            <ItemCount  
            agregarCarrito={ agregarCarrito } 
            cantidad={10}
            setMostrarBoton={ setMostrarBoton }
            />
            <Button className="contenedorContador"
                variant="primary" 
                onClick={ () => {agregarCarrito (contador) ; agregarAlCarrito(`${descripcion.nombre}`) } } 
                disabled={contador === 0} > 
                Agregar 
            </Button>
            </div>
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