// Firestore
import { collection, getDocs } from "firebase/firestore"
import database from "./firebaseConfig";

const TraerProductos = () => {
    const traerProductos = async () => {
        const productoSnapshot = await getDocs( collection ( database , "productos" ) );
        const listaProductos = productoSnapshot.docs.map((doc) => {
            let producto = doc.data()
            producto.id = doc.id
            return producto
        })
        return listaProductos
    }

    return  ( 
        traerProductos()
    ) 
}

export default TraerProductos