import CardBoots from "../Cards/Cards";
import { Card, CardGroup } from "react-bootstrap";
import StockProductos from "./List";
import { useEffect, useState } from "react";

const ListaProductos = () => { 
    const traerProductos = () => {
        return new Promise ( (resolve, reject) => {
            resolve(StockProductos)
        })
    }

    const [productos, setProductos] = useState ([])

    useEffect( () => {
        traerProductos()
        .then ((respuesta) => {
            setProductos(respuesta)
        })
        .catch( (error) => {
            alert('Falló la llamada', error)
        }, [])
    })

    return (
        <>
        <div>
            <h3> Parabrisas </h3>
                <CardGroup>
            {
                productos.map( ({nombre, img, descripcion, precio, id}) => {
                    return(
                        <Card key={id}>
                        <CardBoots nombre= {nombre} imagen={img} descripcion={descripcion} precio={precio} /> 
                        </Card>
                    )
                })
            }
                 </CardGroup>
        </div>
        </>
    )
}

export default ListaProductos;


