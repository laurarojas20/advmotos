import ItemDetail from "../ItemDetail/ItemDetail"
import List  from "../ListaProductos/List"
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

const ItemDetailContainer = () => {
    const { id } = useParams()
    const [producto , setProducto] = useState ({}) 
    const navigate = useNavigate()
   
    const traerProductos = () => {
        return new Promise ( (resolve, reject) => {
            resolve(List)
        })
    }


    useEffect ( () => {
        traerProductos()
        .then ( (res) => { 
            setProducto ( id 
                ? res.find (item => item.id === parseInt(id)) 
                : navigate('/NoEncontrado'))
        })

    }, [id])

    return (
        <div>
            <ItemDetail descripcion={producto}/>
        </div>
    )
}

export default ItemDetailContainer