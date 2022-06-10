import mockProductos from "./mockProductos"

const TraerProductos = () => {
    return new Promise ( (resolve, reject) => {
        resolve(mockProductos)
    }) 
}

export default TraerProductos