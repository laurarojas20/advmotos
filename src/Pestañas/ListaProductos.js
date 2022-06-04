import ItemListContainer from "../Components/ListaProductos/ItemListContainer"
import List from "../Components/ListaProductos/List"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

const ListaProductos = () => {
    const [productos, setProductos] = useState ([])
    const { categoria } = useParams()

    const traerProductos = () => {
        return new Promise ( (resolve, reject) => {
            resolve(List)
        })
    }

    useEffect( () => {    
        traerProductos()
        .then ((respuesta) => {            
                setProductos( categoria 
                    ? respuesta.filter(articulo => articulo.categoria === categoria)
                    : respuesta)   
        })

    }, [categoria])
    
    return (
        <div className="contenedor">           
            <ItemListContainer titulo={categoria} productos={productos} /> 
        </div>
    )
}

export default ListaProductos 