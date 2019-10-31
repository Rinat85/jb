import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from 'react-i18next';

import Container from './Container';
import SectionHeader from './SectionHeader';
import Bg from '../img/partners-bg.png';

const StyledPartnersSection = styled.section`
    padding: 97px 0 97px 0;
    background: url(${Bg}) no-repeat center center;
    background-size: cover;

    @media screen and (min-width: 901px) and (max-width: 1140px) {
        .slick-prev {
            left: 25px;
        }

        .slick-next {
            right: 25px;
        }
    }
`;

const StyledSliderItem = styled.div`
    max-width: 255px;
    height: 131px;
    background-color: white;
    margin: 0 auto;
    display: flex;
    align-items: center;
    text-align: center;

    h4 {
        margin: 0 auto;
        font-family: 'Geometria-BoldItalic';
        color: #2f2e2a;
        font-size: 24px;
        text-align: center;

        span {
            color: #005d88;
        }
    }

    
`;

 const PartnersSection = () => {

    const { t } = useTranslation();
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1140,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <StyledPartnersSection id="partners">
            <Container>
                <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce={true}>
                    <SectionHeader text={t("Наши партнеры")} color="#ffffff" subcolor="#ffffff" />
                </ScrollAnimation>
                <Slider {...settings}>
                    <div>
                        <StyledSliderItem>
                            <h4><span>SIA</span> "EuroStyle"</h4>
                        </StyledSliderItem>
                    </div>
                    <div>
                        <StyledSliderItem>
                            <h4><span>SIA</span> "Kretss"</h4>
                        </StyledSliderItem>
                    </div>
                    <div>
                        <StyledSliderItem>
                            <h4><span>Xamkory</span> bo Avrupo</h4>
                        </StyledSliderItem>
                    </div>
                    <div>
                        <StyledSliderItem>
                            <h4>World Internet Project Inc.</h4>
                        </StyledSliderItem>
                    </div>
                    <div>
                        <StyledSliderItem>
                            <h4><span>SIA</span> "EuroStyle"</h4>
                        </StyledSliderItem>
                    </div>
                    <div>
                        <StyledSliderItem>
                            <h4><span>SIA</span> "Kretss"</h4>
                        </StyledSliderItem>
                    </div>
                    <div>
                        <StyledSliderItem>
                            <h4><span>Xamkory</span> bo Avrupo</h4>
                        </StyledSliderItem>
                    </div>
                    <div>
                        <StyledSliderItem>
                            <h4>World Internet Project Inc.</h4>
                        </StyledSliderItem>
                    </div>
                </Slider>
            </Container>
        </StyledPartnersSection>
    );
};

export default PartnersSection;