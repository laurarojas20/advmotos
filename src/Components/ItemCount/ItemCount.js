import { useState } from "react";
import { Button } from "react-bootstrap"

const ItemCount = ({cantidad, agregarCarrito, setMostrarBoton}) => { 
    const [contador, setContador] = useState (1)

    const sumaContador = () => {
        contador < cantidad && ( setContador(contador + 1) )
    }

    const restaContador = () => {
        contador > 0 && ( setContador(contador - 1) )
    }

return (      
    <div className="contenedorContador">           
        <Button className="botonContador" variant="secondary" onClick={restaContador} > - </Button>
            <p className="botonContador"> {contador} </p>        
        <Button className="botonContador" variant="secondary" onClick={sumaContador}> + </Button>
        
        <Button className="contenedorContador" variant="primary" onClick={ () => {agregarCarrito (contador) ; setMostrarBoton(true)} } disabled={contador === 0}> Agregar </Button>                      
    </div>
    )
}

export default ItemCount;