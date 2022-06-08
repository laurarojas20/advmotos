import ItemListContainer from "../Components/ItemListContainer/ItemListContainer"
import TraerProductos from "../Data/TraerProductos";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader/Loader";


const ListaProductos = () => {
    const [productos, setProductos] = useState ([])
    const { categoria } = useParams()
    const [loading, setLoading] = useState(true)


    useEffect( () => {  
        TraerProductos() 
        .then ((respuesta) => {
                    setProductos( categoria 
                        ? respuesta.filter(articulo => articulo.categoria === categoria)
                        : respuesta)
        })              
        .catch( (error) => {
            alert('Lo sentimos hubo un error', error)
        }
        ).finally( () => { 
            setLoading(false) 
        })
    }, [categoria])
    
    return (
        <>
        { loading ? <Loader /> 
        :
        <div className="contenedor">           
            <ItemListContainer titulo={categoria} productos={productos} /> 
        </div>
        }
        </>
    )
}

export default ListaProductos 