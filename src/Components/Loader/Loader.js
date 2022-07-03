import { Spinner } from "react-bootstrap"
import './Loader.css'

const Loader = () => {
    return(
    <div className="spinner">
        <Spinner animation="border" variant="danger"/>
    </div>
    )
}

export default Loader