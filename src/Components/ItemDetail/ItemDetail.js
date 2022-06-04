import { Container } from "react-bootstrap"
import ItemCount from "../ItemCount/ItemCount"
import { toast } from 'react-toastify';

const ItemDetail = ({descripcion}) => {
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
            <ItemCount  agregarCarrito={ agregarCarrito } cantidad={10}/>
            <hr /> 
                <h3> Descripción </h3>
        <p>
            {descripcion.descripcion}
        </p>    
               
            </div>
        </div>
    </Container>
    )
}

export default ItemDetail