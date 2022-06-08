import MockProductos from "./MockProductos"

const TraerProductos = () => {
    return new Promise ( (resolve, reject) => {
        resolve(MockProductos)
    }) 
}

export default TraerProductos