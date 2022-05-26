import { useState } from "react";
import { Button } from "react-bootstrap"


const ItemCount = ({cantidad, agregarCarrito}) => {
    
          
    const [contador, setContador] = useState (1)

    const sumaContador = () => {
        if(contador < cantidad) {
            setContador ( contador + 1 )
        }       
    }

    const restaContador = () => {
        if (contador > 0){
            setContador ( contador - 1 )
        }
    }
   
    return (
       
    <div className="contenedorContador">           
        <Button className="botonContador" variant="secondary" onClick={restaContador} > - </Button>
            <p> {contador} </p>        
        <Button className="botonContador" variant="secondary" onClick={sumaContador}> + </Button>
        
        <Button className="contenedorContador" variant="primary" onClick={ agregarCarrito (contador) } disabled={contador === 0}> Agregar </Button>              
        
    </div>
        
    )
}

export default ItemCount;