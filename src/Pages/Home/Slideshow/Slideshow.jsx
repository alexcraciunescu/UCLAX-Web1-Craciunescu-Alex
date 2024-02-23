import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

// data
import { slidesData } from "./slidesData";

// components
import Slide from "./Slide";

const Slideshow = () => {
    return (
        <SlideshowStyled>
            <Carousel infinteLoop={true} autoPlay={true}>
                {slidesData.map((slide) => {
                    return <Slide key={slide.id} slide={slide} />;
                })}
            </Carousel>
        </SlideshowStyled>
    );
};

export default Slideshow;

const SlideshowStyled = styled.div``;
