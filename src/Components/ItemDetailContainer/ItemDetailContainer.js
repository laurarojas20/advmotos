import ItemDetail from "../ItemDetail/ItemDetail"
import TraerProductos from "../../Data/TraerProductos"
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

const ItemDetailContainer = () => {
    const { id } = useParams()
    const [producto , setProducto] = useState ({}) 
    const navigate = useNavigate()
    
    useEffect ( () => {
        TraerProductos()
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