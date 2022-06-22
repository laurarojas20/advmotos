import { toast } from "react-toastify";
import { createContext, useState } from "react";

const CarritoContexto = createContext () 

const CarritoProvider = ({ children }) => {
    const [carritoProductos, setCarritoProductos ] = useState([])
    const [contadorCantidad, setContadorCantidad ] = useState(0)

    const agregarAlCarrito = (producto) => {
        let productoAgregado = carritoProductos.find(itemAgregado => itemAgregado.id  === producto.id)
        { !productoAgregado ? 
                setCarritoProductos(carritoProductos => [...carritoProductos, producto])
            : 
            toast(`PEROO ${producto.nombre} ya está en el carrito`, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                })
        }
        contadorCarrito(contadorCantidad)
    }

    const contadorCarrito = () => {
        let numero = carritoProductos.reduce((acu, ele) => acu += ele.contador, 0);
        setContadorCantidad(numero)
        console.log(contadorCarrito)
    }

    const eliminarProducto = (producto) => {
       setCarritoProductos(carritoProductos.filter(item => item.id !== producto.id))
    }

    const vaciarCarrito = () => { 
        setCarritoProductos([]) 
    }


    const precioTotal = () => {
        return carritoProductos.reduce((acu, producto) => (acu + (producto.contador * producto.precio) ), 0)
    }

    const data = {
        carritoProductos, 
        agregarAlCarrito, 
        eliminarProducto, 
        vaciarCarrito, 
        precioTotal,
        contadorCarrito
    }

    return(
        <CarritoContexto.Provider value={ data }>
            {children}            
        </CarritoContexto.Provider> 
    )
}

export default CarritoProvider
export { CarritoContexto }