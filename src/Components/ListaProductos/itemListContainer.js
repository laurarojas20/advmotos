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
            setTimeout(() => {
                setProductos(respuesta)
            }, 2000)
        })
        .catch( (error) => {
            alert('Falló la llamada', error)
        }, [])
    })



    return (
        <>
        <div>
            <h3> Parabrisas </h3>
                <CardGroup  row row-cols-1 row-cols-md-2 row-cols-lg-4>
            {
                productos.map( ({nombre, img, descripcion, precio, id}) => {
                    return(
                    
                        <Card key= {id}>
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


