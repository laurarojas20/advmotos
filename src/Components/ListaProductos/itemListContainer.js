import CardBoots from "../Cards/Cards";
import { Card, CardGroup } from "react-bootstrap";
import List from "./List";
import { useEffect, useState } from "react";


const ItemListContainer = () => { 
    const traerProductos = () => {
        return new Promise ( (resolve, reject) => {
            resolve(List)
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

export default ItemListContainer;


