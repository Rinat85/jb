import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';

import Container from './Container';
import SectionHeader from './SectionHeader';
import MainButton from './MainButton';

const StyledFeaturesSection = styled.section`
    padding: 97px 0 67px 0;
    position: relative;
    overflow: hidden;

    ::before {
        content: '';
        display: block;
        position: absolute;
        width: 172px;
        height: 172px;
        top: 50%;
        left: -172px;
        border: 2px solid #a11a39;
        transform: rotateZ(45deg) translateY(-50%);
    }

    ::after {
        content: '';
        display: block;
        position: absolute;
        width: 172px;
        height: 172px;
        top: 50%;
        right: -43px;
        border: 2px solid #a11a39;
        transform: rotateZ(45deg) translateY(-50%);
    }

    button {
        margin-left: calc(50% - 180px);
    }

    button a {
        padding: 0 30px;
    }

    @media screen and (max-width: 600px) {
        button {
            margin: 28px auto 0;
        }
    }

    @media screen and (max-width: 1340px) {

        ::before {
            display: none;
        }

        ::after {
            display: none;
        }
    }
`;

const StyledFeaturesItems = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 115px;
`;

const StyledFeaturesItem = styled.div`
    max-width: 335px;
    margin-bottom: 75px;

    img {
        display: inline-block;
        width: 80px;
        height: 80px;
        vertical-align: top;
    }

    div {
        display: inline-block;
        max-width: 230px;
        margin-left: 25px;

        h3 {
            display: inline-block;
            color: #2d2d2d;
            font-size: 18px;
            font-family: 'Geometria-Bold';
            margin-bottom: 20px;
            text-transform: uppercase;
        }

        p {
            display: inline-block;
            color: #898888;
            font-size: 14px;
            font-family: 'GothamPro-Light';
            line-height: 1.5em;

            @media screen and (max-width: 600px) {
                font-size: 16px;
                color: #333333;
                font-weight: 600;
            }
        }
    }
`;

const TourismFeatures = (props) => {

    const { handleClick } = props;

    return (
        <StyledFeaturesSection id="features">
            <Container>
                <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce={true}>
                    <SectionHeader text="Работая с нами вы получите" color="#2d2d2d" subcolor="#a11a39" />
                </ScrollAnimation>
                <StyledFeaturesItems>
                    <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce={true}>
                        <StyledFeaturesItem>
                            <img src="../img/tourism-feature1.png" alt="feature1" />
                            <div>
                                <h3>Лучшие туры</h3>
                                <p>Предлагаем только самые интересные и проверенные туры.</p>
                            </div>
                        </StyledFeaturesItem>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeIn" duration={2} delay={500} animateOnce={true}>
                        <StyledFeaturesItem>
                            <img src="../img/tourism-feature2.png" alt="feature2" />
                            <div>
                                <h3>Выгодные цены</h3>
                                <p>Гарантируем выгодные цены на все направления и туры. С нами дешевле.</p>
                            </div>
                        </StyledFeaturesItem>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeIn" duration={2} delay={1000} animateOnce={true}>
                        <StyledFeaturesItem>
                            <img src="../img/tourism-feature3.png" alt="feature3" />
                            <div>
                                <h3>Лучшие отели</h3>
                                <p>Рекомендуем отели с проверенной репутацией и отличными отзывами</p>
                            </div>
                        </StyledFeaturesItem>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce={true}>
                        <StyledFeaturesItem>
                            <img src="../img/tourism-feature4.png" alt="feature4" />
                            <div>
                                <h3>Быстрая бронь</h3>
                                <p>Раннее бронирование позволит сэкономить до 30%.</p>
                            </div>
                        </StyledFeaturesItem>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeIn" duration={2} delay={500} animateOnce={true}>
                        <StyledFeaturesItem>
                            <img src="../img/tourism-feature5.png" alt="feature5" />
                            <div>
                                <h3>Визовая поддержка</h3>
                                <p>Поможем решить самые сложные проблемы с визой.</p>
                            </div>
                        </StyledFeaturesItem>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeIn" duration={2} delay={1000} animateOnce={true}>
                        <StyledFeaturesItem>
                            <img src="../img/tourism-feature6.png" alt="feature6" />
                            <div>
                                <h3>Любые туры</h3>
                                <p>Подберем любой тур под Ваш бюджет и интересы.</p>
                            </div>
                        </StyledFeaturesItem>
                    </ScrollAnimation>
                </StyledFeaturesItems>
                <MainButton handleClick={handleClick} margin="0 auto" text="Получите консультацию прямо сейчас" />
            </Container>
        </StyledFeaturesSection>
    )
};

export default TourismFeatures;