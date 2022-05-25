import { useState } from "react";
import { Button } from "react-bootstrap"

const ItemCount = () => {
       
    const [contador, setContador] = useState (0)

    const sumaContador = () => {
        
            setContador ( contador + 1 )
        
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
    </div>
        
    )
}

export default ItemCount;