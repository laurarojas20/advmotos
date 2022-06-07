import CardBoots from "../Cards/Cards";
import { Card, CardGroup } from "react-bootstrap";

const ItemListContainer = ({titulo, productos}) => { 
      
    return (
        <>
        <div>
            <h3> Accesorios - {titulo} </h3>
            <br /> 
                <CardGroup className='row row-cols-sm-2 row-cols-md-3 row-cols-lg-4'>
            {
                productos.map( ({nombre, img,  precio, id}) => {
                    return(
                    
                        <Card className="col ContenedorProductos" key= {id}>
                        <CardBoots nombre= {nombre} imagen={img} precio={precio} id= {id} /> 
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


