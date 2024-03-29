import { Button, Modal, Form } from "react-bootstrap";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CarritoContexto } from "../../Contexto/CarritoContexto";
import { addDoc, collection } from "firebase/firestore"
import database from "../../Data/firebaseConfig";

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
  const handleSubmit = (event) => {
    event.preventDefault()
    setOrden({...orden, comprador: valorFormulario})
    guardarData({...orden, comprador: valorFormulario})

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
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
    vaciarCarrito()
  }  
  
  const navigate = useNavigate()

  const finalizarOrden = () => {
    navigate('/')
  }

  const Swal = require('sweetalert2')

  const [validated, setValidated] = useState(false);

  

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
        Swal.fire({
          title: '<strong> Orden generada con éxito  </strong>',
          icon: 'success',
          html:
            `Número de orden: ${ordenExitosa}` 
            ,
          showCloseButton: true,
          showCancelButton: false,
          focusConfirm: false,
          confirmButtonText:
          `Aceptar`,
        }).then((result) => {
          if (result.isConfirmed) {
            finalizarOrden()
          }
        })
      ) : (
      <Form validated={validated} onSubmit={handleSubmit}>
        
        <Form.Group className="mb-3" controlId="validacionNombre">
              <Form.Label>Nombre y Apellido</Form.Label>
              <Form.Control
                required 
                type="text" 
                placeholder="Introduce tu Nombre y Apellido" 
                name="nombre"
                value={valorFormulario.nombre}
                onChange={handleChange}
              />
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="validacionTelefono">
              <Form.Label> Teléfono </Form.Label>
              <Form.Control
                required  
                type="text" 
                placeholder="Introduce tu número de teléfono"  
                name="telefono"
                value={valorFormulario.telefono}
                onChange={handleChange}
              />
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="validacionCorreo">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control 
                required 
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