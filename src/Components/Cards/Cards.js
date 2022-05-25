import { Card, Button } from "react-bootstrap";
import  ItemCount  from "../ItemCount/ItemCount.js"

const CardBoots = ({nombre, imagen, descripcion, precio}) => {
    
return(
    
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src=  {` ./${imagen} ` } />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                    {descripcion}
                </Card.Text>    
                <Card.Text>
                    ${precio} 
                </Card.Text>
                <ItemCount /> 
                <Button variant="primary">Agregar</Button>
            </Card.Body>
        </Card>
        
    )
}

export default CardBoots;
