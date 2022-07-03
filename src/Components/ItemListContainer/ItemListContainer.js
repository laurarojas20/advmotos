import CardBoots from "../Cards/Cards";
import { Card } from "react-bootstrap";
import './EstilosItemListContainer.css'

const ItemListContainer = ({titulo, productos}) => { 
     
    return (
        <>
            <div className="titulo">
            <h3> Accesorios - {titulo} </h3>
            </div> 
                <div className= 'row row-cols-sm-1 row-cols-md-3 row-cols-lg-4 contenedorCards'>
            {
                productos.map( ({nombre, img,  precio, id}) => {
                    return(
                    
                        <Card className='row producto' key= {id}>
                        <CardBoots nombre= {nombre} imagen={img} precio={precio} id= {id} /> 
                        </Card>
                       
                    )
                })
            }
                 </div>       
        </>
    )
}

export default ItemListContainer;


