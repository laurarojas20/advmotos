import ItemListContainer from "../Components/ItemDetailContainer/ItemDetailContainer"
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
    const filtroCategorias = (array) => {
        return array.map( (articulo) => {
            if (articulo.categoria === categoria) {
                return setProductos(productos => [...productos, articulo])
            }
        } )
    }
    
    useEffect( () => {
        setProductos([])
        traerProductos()
        .then ((respuesta) => {
            
                filtroCategorias(respuesta)
           
        })

    }, [categoria])

    

    return (
        <div> 
           
        <ItemListContainer nombre={"LISTADO DE PRODUCTOS"} productos={productos} /> 
        </div>
// 
    )
}

export default ListaProductos 