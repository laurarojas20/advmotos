import ItemListContainer from "../Components/ItemListContainer/ItemListContainer"
import TraerProductos from "../Data/TraerProductos";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const ListaProductos = () => {
    const [productos, setProductos] = useState ([])
    const { categoria } = useParams()
    const [loading, setLoading] = useState(false)
    
    const cambioEstado = () => {
        if (loading === true){
        return <Spinner animation="border" variant="danger" />       
        }
    }

    useEffect( () => {  
        setLoading(true) 
        cambioEstado()
        TraerProductos() 
        .then ((respuesta) => {            
            setTimeout(()=>{
                setProductos( categoria 
                    ? respuesta.filter(articulo => articulo.categoria === categoria)
                    : respuesta)
            }, 2000)       
        .catch((error)=>(
            alert('Lo sentimos hubo un error', error)
        )
        ).finally(()=>{
            setLoading(false)
        })
        })

        

    }, [categoria])
    
    return (
        <div className="contenedor">           
            <ItemListContainer titulo={categoria} productos={productos} /> 
        </div>
    )
}

export default ListaProductos 