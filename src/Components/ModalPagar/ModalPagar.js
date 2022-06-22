import { Button, Modal, Form } from "react-bootstrap";
import React, { useContext, useState } from "react";
import { CarritoContexto } from "../../Contexto/CarritoContexto";
import { addDoc, collection } from "firebase/firestore"
import database from "../../Data/firebaseConfig";
import { useNavigate } from "react-router-dom";

const ModalPagar = () => {
  const { carritoProductos, precioTotal, vaciarCarrito } = useContext(CarritoContexto)

  const [show, setShow] = useState(false);   
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const [ valorFormulario, setValorFormulario ] = useState({
          nombre: '', 
          telefono: '', 
          email: '' 
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    setOrden({...orden, comprador: valorFormulario})
    guardarData({...orden, comprador: valorFormulario})
  }
  const handleChange = (e) => {
    setValorFormulario({...valorFormulario, [e.target.name]: e.target.value})
  }
  
  const [ orden , setOrden ] = useState({
    comprador: {}, 
    items: carritoProductos.map ( (item) => {
      return {
        id: item.id,
        nombre: item.nombre,
        precio: item.precio, 
        cantidad: item.contador
      }
    } ), 
    total: precioTotal()
  })

  const [ ordenExitosa, setOrdenExitosa ] = useState()

  const guardarData = async (nuevaOrden) => {
    const ordenFirebase = collection(database, 'ordenes')
    const ordenDoc = await addDoc(ordenFirebase, nuevaOrden)
    setOrdenExitosa(ordenDoc.id)
    console.log("Orden generada ", ordenDoc)
  }  
  
  const navigate = useNavigate()

  const finalizarOrden = () => {
    navigate('/')
    vaciarCarrito()
  }

  return (
    <>
      <Button variant="dark" onClick={handleShow} style={{marginLeft: '5%'}}>
              Pagar
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> {ordenExitosa ? 'Compra exitosa' : 'Generación de orden de compra' } </Modal.Title>
        </Modal.Header>
        <Modal.Body>

      {ordenExitosa ? (
        <div> 
          Orden generada con éxito 
          <br /> 
          Número de orden: {ordenExitosa}
          <br /> 
        <Button variant="dark" onClick={finalizarOrden}> Aceptar </Button>
        </div> 
      ) : (
      <Form onSubmit={handleSubmit}>
        
        <Form.Group className="mb-3" >
              <Form.Label>Nombre y Apellido</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Introduce tu Nombre y Apellido" 
                name="nombre"
                value={valorFormulario.nombre}
                onChange={handleChange}
              />
          </Form.Group>
  
          <Form.Group className="mb-3" >
              <Form.Label> Teléfono </Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Introduce tu número de teléfono"  
                name="telefono"
                value={valorFormulario.telefono}
                onChange={handleChange}
              />
          </Form.Group>
  
          <Form.Group className="mb-3" >
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Introduce tu email" 
                name="email"
                value={valorFormulario.email}
                onChange={handleChange}
              />
              <Form.Text className="text-muted">
                No compartiremos tu información con nadie
              </Form.Text>
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check 
              required
              label="Estoy de acuerdo con los términos y condiciones"
              feedback="Marque esta casilla si desea continuar."
              feedbackType="invalid" 
            />
          </Form.Group>
          <Button 
                  variant="dark" 
                  onClick={handleClose}
          >
              Cerrar
          </Button>
          <Button type="submit" 
                  variant="secondary" 
                  onClick={handleClose} 
                  style={{marginLeft: '5%'}}
          >
              Enviar
          </Button>
      </Form>      
      ) }
    </Modal.Body>
      
  </Modal>  
      
    </>
  );
}

export default ModalPagar