import { Carousel } from "react-bootstrap"


const CarouselBoots = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img className="d-block w-100" src="./img/motoBanner1.jpg" alt="Primer foto del banner" />
                <Carousel.Caption>
                <h1 className="color">ADV Motos</h1>
                <p> Accesorios para tu confort </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src="./img/motoBanner2.jpg" alt="Segunda foto del banner" />

                <Carousel.Caption>
                <h1 className="color">ADV Motos</h1>
                <p> Accesorios para tu confort </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100" src="./img/motoBanner3.jpg" alt="Tercer foto del banner" />

                <Carousel.Caption>
                <h1 className="color">ADV Motos</h1>
                <p> Accesorios para tu confort </p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
    )
}

export default CarouselBoots;