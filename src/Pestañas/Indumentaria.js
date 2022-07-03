import './EstilosPestañas/EstilosPestañas.css'
import TraerProductos from "../Data/TraerProductos"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Loader from "../Components/Loader/Loader"
import ItemListContainer from "../Components/ItemListContainer/ItemListContainer"

const Indumentaria = () => {
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
        
        <div className='container ContenedorProductos'>
        { loading ? <Loader /> 
        :
                   
            <ItemListContainer titulo={categoria} productos={productos} /> 
        
        }
        </div>
        
    )

}

export default Indumentaria