import ItemDetail from "../ItemDetail/ItemDetail"
import List  from "../ListaProductos/List"
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

const ItemDetailContainer = () => {
    const {id} = useParams()
    const [producto , setProducto] = useState ({}) 
    const navigate = useNavigate()
   
    // const traerProductoDetalle = () => {
    //     return new Promise ( (resolve, reject) => {
    //         resolve(List)
    //     }, 2000 )
    // }

    useEffect ( () => {
        const filtroProductos = List.find ( (item) => {
            return item.id === id
        })

        if ( filtroProductos === undefined ){
            navigate('/NoEncontrado')
        } else {
            setProducto(filtroProductos)
        }

    }, [id])

    return (
        <div> 
            
            <ItemDetail descripcion={producto}/> 

        </div>
    )
}

export default ItemDetailContainer