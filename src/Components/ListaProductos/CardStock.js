import CardBoots from "../Cards/Cards";
import { Card, CardGroup } from "react-bootstrap";

const ListaProductos = () => { 
    return (
        <>
        <div>
            <h3> Parabrisas </h3>
                <CardGroup>
            <Card>
            <CardBoots nombre= {"Parabrisa MTC Grand Route"} imagen={"./img/parabrisas1.jpg"} descripcion={"Parabrisa C/ Soporte Universal Grand Route Mtc"} precio={8.945} /> 
            </Card>
            <Card>
            <CardBoots nombre={"Parabrisas Givi 408d"} imagen={"./img/parabrisas2.jpg"} descripcion={"Parabrisa para Kawasaki KLR 07-14 23 cm"} precio={30.333} />
            </Card>
            <Card>
            <CardBoots nombre={"Parabrisa Pferd Adventure 390 Y 790"} imagen={"./img/parabrisas3.jpg"} descripcion={"Incluye: Parabrisas de 41 cm en policarbonato ESPECIAL, sistema movil SAVAGE y refuerzos para el soporte"} precio={16.391} />
            </Card>
                 </CardGroup>
        </div>
        </>
    )
}

export default ListaProductos;


