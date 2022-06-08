import { Spinner } from "react-bootstrap"

const Loader = () => {
    return(
    <div className="spinner">
        <Spinner animation="border" variant="danger"/>
    </div>
    )
}

export default Loader