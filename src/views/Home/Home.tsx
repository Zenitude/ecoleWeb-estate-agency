import { useState } from "react";
import { Link } from "react-router-dom";
import { HomeContainer } from "./Home.style";
import { logo } from "../../assets";
import Carousel from "../../components/Carousel/Carousel";
import { slide1, slide2, slide3, right } from "../../assets";

export default function Home() {
    const [ index, setIndex ] = useState(0);
    const carouselDatas = [
        { src: slide1, alt: "château"},
        { src: slide2, alt: "pilliers"},
        { src: slide3, alt: "château"}
    ]

    return (<HomeContainer>
        <section>
            <h1>
                <img src={logo} alt="logo de l'agence" />
                <span>Agence Héracles</span>
            </h1>
            <p>Nous vous proposons des biens d'exceptions, de l'hôtel particulier au Château.</p>
            <Link to={"/services"}>En savoir plus</Link>
        </section>

        <Carousel src={carouselDatas[index].src} alt={carouselDatas[index].alt} index={index} setIndex={setIndex} indexMin={0} indexMax={carouselDatas.length}/>

        <section>
            <h2>Des offres d'exception, à un prix imbattable.</h2>
            <p>Goutez à l'exception.</p>
            <Link to={"/gallery"}>Découvrez nos bien.</Link>
        </section>

        <section>
            <h2>Envoyez nous un message</h2>
            <Link to={"/contact"}>
                <img src={right} alt="go to contact form" />
            </Link>
        </section>
    </HomeContainer>)
}
