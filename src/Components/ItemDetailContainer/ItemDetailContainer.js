import ItemDetail from "../ItemDetail/ItemDetail"
import TraerProductos from "../../Data/TraerProductos"
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Container } from "react-bootstrap"

const ItemDetailContainer = () => {
    const { id } = useParams()
    const [producto , setProducto] = useState ({}) 
    const navigate = useNavigate()
    
    useEffect ( () => {
        TraerProductos()
        .then ( (res) => { 
            setProducto ( id 
                ? res.find (item => item.id === id) 
                : navigate('/NoEncontrado'))
        })

    }, [id])

    return (
        <Container fluid>
            <ItemDetail producto={producto}/>
        </Container>
    )
}

export default ItemDetailContainer