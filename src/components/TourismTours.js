import React, { Component } from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

import Container from './Container';
import SectionHeader from './SectionHeader';
import Bg from '../img/tours-bg.png';

const StyledTestimonialsSection = styled.section`
    padding: 97px 0 97px 0;
    background: url(${Bg}) no-repeat center center;
    background-size: cover;

    @media screen and (max-width: 600px) {
        padding: 37px 0 57px 0;   
    }

    @media screen and (min-width: 601px) and (max-width: 900px) {
        padding: 37px 0 57px 0;   
    }

    @media screen and (min-width: 901px) and (max-width: 1200px) {
        .slick-prev {
            left: 25px;
        }

        .slick-next {
            right: 25px;
        }
    }

`;

const StyledSliderItems = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

const StyledSliderItem = styled.div`
    max-width: 350px;
    background-color: white;
    margin-top: 30px;

    img {
        width: 100%;
    }

    h4 {
        margin: 30px 0 0 26px;
        font-family: 'Geometria-Bold';
        color: #2d2d2d;
        font-size: 18px;
        text-transform: uppercase;
    }

    p {
        margin: 20px 0 55px 26px;
        font-family: 'Geometria-Light';
        font-size: 14px;
        color: #2d2d2d;
        line-height: 1.5em;
    }

    @media screen and (max-width: 600px) {
        max-width: 90%;
        margin: 15px auto;

        h4 {
            padding-top: 25px;
        }
        
    }

    @media screen and (min-width: 601px) and (max-width: 900px) {
        max-width: 90%;

        h4 {
            padding-top: 45px;
        }
        
    }

    @media screen and (min-width: 901px) and (max-width: 1200px) {
        max-width: 430px;
        margin: 40px auto 37px auto;
        
    }
`;

const StyledCardBottom = styled.div`
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #d6c7c9;
    margin: 0 22px;
    padding: 15px 0 25px 0;
    p {
        max-width: 49%;
        margin: 0;
        color: #2d2d2d;
        font-size: 14px;
        font-family: 'Geometria-Medium';

        svg {
            margin-right: 7px;
        }
    }
`;

export default class TourismTours extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
        };

        return (
            <StyledTestimonialsSection id="tours">
                <Container>
                    <ScrollAnimation animateIn="fadeIn" duration={3} animateOnce={true}>
                        <SectionHeader text="Самые выгодные и интересные туры" color="#ffffff" subcolor="#ffffff" />
                    </ScrollAnimation>
                    <Slider {...settings}>
                        <div>
                            <StyledSliderItems>
                                <ScrollAnimation animateIn="zoomIn" duration={2} animateOnce={true}>
                                    <StyledSliderItem>
                                        <img src="../img/tourism-tour1.png" alt="tour1" />
                                        <h4>Пхукет</h4>
                                        <p>Прямые перелеты до острова</p>
                                        <StyledCardBottom>
                                            <p>
                                                <FontAwesomeIcon icon={faPlane} color="#a11a39" /> индивидуальный период
                                            </p>
                                            <p>
                                                <FontAwesomeIcon icon={faCalendarAlt} color="#a11a39" /> Круглый год
                                            </p>
                                        </StyledCardBottom>
                                    </StyledSliderItem>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="zoomIn" duration={2} delay={300} animateOnce={true}>
                                    <StyledSliderItem>
                                        <img src="../img/tourism-tour2.png" alt="tour2" />
                                        <h4>Мальдивы</h4>
                                        <p>Скидка до 45%</p>
                                        <StyledCardBottom>
                                            <p>
                                                <FontAwesomeIcon icon={faPlane} color="#a11a39" /> индивидуальный период
                                            </p>
                                            <p>
                                                <FontAwesomeIcon icon={faCalendarAlt} color="#a11a39" /> Круглый год
                                            </p>
                                        </StyledCardBottom>
                                    </StyledSliderItem>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="zoomIn" duration={2} delay={600} animateOnce={true}>
                                    <StyledSliderItem>
                                        <img src="../img/tourism-tour3.png" alt="tour3" />
                                        <h4>Остров БОНЕО</h4>
                                        <p>Групповые туры</p>
                                        <StyledCardBottom>
                                            <p>
                                                <FontAwesomeIcon icon={faPlane} color="#a11a39" /> индивидуальный период
                                            </p>
                                            <p>
                                                <FontAwesomeIcon icon={faCalendarAlt} color="#a11a39" /> Круглый год
                                            </p>
                                        </StyledCardBottom>
                                    </StyledSliderItem>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="zoomIn" duration={2} animateOnce={true}>
                                    <StyledSliderItem>
                                        <img src="../img/tourism-tour4.png" alt="tour4" />
                                        <h4>Бадрум</h4>
                                        <p>Бесплатные ночи в бадруме</p>
                                        <StyledCardBottom>
                                            <p>
                                                <FontAwesomeIcon icon={faPlane} color="#a11a39" /> индивидуальный период
                                            </p>
                                            <p>
                                                <FontAwesomeIcon icon={faCalendarAlt} color="#a11a39" /> Круглый год
                                            </p>
                                        </StyledCardBottom>
                                    </StyledSliderItem>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="zoomIn" duration={2} delay={300} animateOnce={true}>
                                    <StyledSliderItem>
                                        <img src="../img/tourism-tour5.png" alt="tour5" />
                                        <h4>Малазийские мальдивы</h4>
                                        <p>Тур в Малайзию</p>
                                        <StyledCardBottom>
                                            <p>
                                                <FontAwesomeIcon icon={faPlane} color="#a11a39" /> индивидуальный период
                                            </p>
                                            <p>
                                                <FontAwesomeIcon icon={faCalendarAlt} color="#a11a39" /> Круглый год
                                            </p>
                                        </StyledCardBottom>
                                    </StyledSliderItem>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="zoomIn" duration={2} delay={600} animateOnce={true}>
                                    <StyledSliderItem>
                                        <img src="../img/tourism-tour6.png" alt="tour6" />
                                        <h4>Стамбул</h4>
                                        <p>Тур в Стамбул</p>
                                        <StyledCardBottom>
                                            <p>
                                                <FontAwesomeIcon icon={faPlane} color="#a11a39" /> индивидуальный период
                                            </p>
                                            <p>
                                                <FontAwesomeIcon icon={faCalendarAlt} color="#a11a39" /> Круглый год
                                            </p>
                                        </StyledCardBottom>
                                    </StyledSliderItem>
                                </ScrollAnimation>
                            </StyledSliderItems>
                        </div>
                        <div>
                            <StyledSliderItems>
                                <StyledSliderItem>
                                    <img src="../img/tourism-tour1.png" alt="tour1" />
                                    <h4>Пхукет</h4>
                                    <p>Прямые перелеты до острова</p>
                                    <StyledCardBottom>
                                        <p>
                                            <FontAwesomeIcon icon={faPlane} color="#a11a39" /> индивидуальный период
                                        </p>
                                        <p>
                                            <FontAwesomeIcon icon={faCalendarAlt} color="#a11a39" /> Круглый год
                                        </p>
                                    </StyledCardBottom>
                                </StyledSliderItem>
                                <StyledSliderItem>
                                    <img src="../img/tourism-tour2.png" alt="tour2" />
                                    <h4>Мальдивы</h4>
                                    <p>Скидка до 45%</p>
                                    <StyledCardBottom>
                                        <p>
                                            <FontAwesomeIcon icon={faPlane} color="#a11a39" /> индивидуальный период
                                        </p>
                                        <p>
                                            <FontAwesomeIcon icon={faCalendarAlt} color="#a11a39" /> Круглый год
                                        </p>
                                    </StyledCardBottom>
                                </StyledSliderItem>
                                <StyledSliderItem>
                                    <img src="../img/tourism-tour3.png" alt="tour3" />
                                    <h4>Остров БОНЕО</h4>
                                    <p>Групповые туры</p>
                                    <StyledCardBottom>
                                        <p>
                                            <FontAwesomeIcon icon={faPlane} color="#a11a39" /> индивидуальный период
                                        </p>
                                        <p>
                                            <FontAwesomeIcon icon={faCalendarAlt} color="#a11a39" /> Круглый год
                                        </p>
                                    </StyledCardBottom>
                                </StyledSliderItem>
                                <StyledSliderItem>
                                    <img src="../img/tourism-tour4.png" alt="tour4" />
                                    <h4>Бадрум</h4>
                                    <p>Бесплатные ночи в бадруме</p>
                                    <StyledCardBottom>
                                        <p>
                                            <FontAwesomeIcon icon={faPlane} color="#a11a39" /> индивидуальный период
                                        </p>
                                        <p>
                                            <FontAwesomeIcon icon={faCalendarAlt} color="#a11a39" /> Круглый год
                                        </p>
                                    </StyledCardBottom>
                                </StyledSliderItem>
                                <StyledSliderItem>
                                    <img src="../img/tourism-tour5.png" alt="tour5" />
                                    <h4>Малазийские мальдивы</h4>
                                    <p>Тур в Малайзию</p>
                                    <StyledCardBottom>
                                        <p>
                                            <FontAwesomeIcon icon={faPlane} color="#a11a39" /> индивидуальный период
                                        </p>
                                        <p>
                                            <FontAwesomeIcon icon={faCalendarAlt} color="#a11a39" /> Круглый год
                                        </p>
                                    </StyledCardBottom>
                                </StyledSliderItem>
                                <StyledSliderItem>
                                    <img src="../img/tourism-tour6.png" alt="tour6" />
                                    <h4>Стамбул</h4>
                                    <p>Тур в Стамбул</p>
                                    <StyledCardBottom>
                                        <p>
                                            <FontAwesomeIcon icon={faPlane} color="#a11a39" /> индивидуальный период
                                        </p>
                                        <p>
                                            <FontAwesomeIcon icon={faCalendarAlt} color="#a11a39" /> Круглый год
                                        </p>
                                    </StyledCardBottom>
                                </StyledSliderItem>
                            </StyledSliderItems>
                        </div>
                    </Slider>
                </Container>
            </StyledTestimonialsSection>
        );
    }
};