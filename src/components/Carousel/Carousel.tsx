import { CarouselContainer, Slide, Previous, Next } from "./Carousel.style";
import { switchSlide } from "../../utils/functions/switchSlide";
import { CarouselProps } from "../../utils/types/CarouselProps";
import { left, right } from "../../assets";

export default function Carousel({src, alt, index, setIndex, indexMin, indexMax}: CarouselProps) {
    return (
        <CarouselContainer className="carousel">
            <Slide src={src} alt={alt} />
            <div className="buttons">
                <Previous className="previous" onClick={(e) => switchSlide(e, index, indexMin, indexMax, setIndex)}>
                    <img src={left} alt="previous slide" />
                </Previous>
                <Next className="next" onClick={(e) => switchSlide(e, index, indexMin, indexMax, setIndex)}>
                    <img src={right} alt="next slide" />
                </Next>
            </div>
        </CarouselContainer>
    )
}
