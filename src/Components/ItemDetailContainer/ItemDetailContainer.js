import ItemDetail from "../ItemDetail/ItemDetail"
import { ProductoDetalle }  from "../ListaProductos/List"
import { useEffect, useState } from "react"

const ItemDetailContainer = () => {

    const traerProductoDetalle = () => {
        return new Promise ( (resolve, reject) => {
            resolve(ProductoDetalle)
        }, 2000 )
    }

    const [producto , setProducto] = useState ({})

    useEffect ( () => {
        traerProductoDetalle()
        .then ( (respuesta) => {
            setProducto(respuesta)
        })
        .catch ( (error) => {
            alert("Lo sentimos, hubo un error", error)
        }
        )
    }, []    )

    return (
        <div> 
            
            <ItemDetail descripcion={producto}/> 

        </div>
    )
}

export default ItemDetailContainer