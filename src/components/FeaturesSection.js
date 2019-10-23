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
    margin-top: -24px;
`;

const StyledFeaturesItem = styled.div`
    max-width: 255px;
    position: relative;
    flex-grow: 1;
    border: 1px solid #dcdcdc;
    margin-top: 48px;
    padding: 56px 22px 60px 22px;
    z-index: 100;

    span {
        position: absolute;
        display: inline-block;
        padding: 12px;
        background-color: white;
        left: 50%;
        top: -36px;
        transform: translateX(-50%);
        font-family: 'GothamPro-Bold';
        font-size: 48px;
        color: #a11a39;
        z-index: 200;
    }

    h3 {
        font-family: 'Geometria-Bold';
        font-size: 18px;
        color: #2d2d2d;
        text-transform: uppercase;
        text-align: center;
        margin-bottom: 26px;
    }

    p {
        font-family: 'GothamPro-Light';
        text-align: center;
        line-height: 1.5em;
        font-size: 14px;
        color: #898888;
    }

`;

const FeaturesSection = (props) => {

    const { handleClick } = props;

    return (
        <StyledFeaturesSection id="features">
            <Container>
                <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce={true}>
                    <SectionHeader text="Работая с нами вы получите" color="#2d2d2d" subcolor="#a11a39" />
                </ScrollAnimation>
                <StyledFeaturesItems>
                    <ScrollAnimation animateIn="fadeIn" duration={2} delay={200} animateOnce={true}>
                        <StyledFeaturesItem >
                            <span>01</span>
                            <h3>Качество</h3>
                            <p>Работаем на международном уровне</p>
                        </StyledFeaturesItem>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeIn" duration={2} delay={300} animateOnce={true}>
                        <StyledFeaturesItem >
                            <span>02</span>
                            <h3>Надежность</h3>
                            <p>Иммиграционные юристы высшей квалификации</p>
                        </StyledFeaturesItem>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeIn" duration={2} delay={400} animateOnce={true}>
                        <StyledFeaturesItem >
                            <span>03</span>
                            <h3>Оперативность</h3>
                            <p>Быстрый результат за короткое время</p>
                        </StyledFeaturesItem>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeIn" duration={2} delay={500} animateOnce={true}>
                        <StyledFeaturesItem >
                            <span>04</span>
                            <h3>Профессионализм</h3>
                            <p>Наша команда работает много лет</p>
                        </StyledFeaturesItem>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeIn" duration={2} delay={200} animateOnce={true}>
                        <StyledFeaturesItem >
                            <span>05</span>
                            <h3>Доверие</h3>
                            <p>решаем проблемы вашего пребывания за рубежом</p>
                        </StyledFeaturesItem>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeIn" duration={2} delay={300} animateOnce={true}>
                        <StyledFeaturesItem >
                            <span>06</span>
                            <h3>Разумные цены</h3>
                            <p>Наиболее выгодные условия для нашего сотрудничества</p>
                        </StyledFeaturesItem>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeIn" duration={2} delay={400} animateOnce={true}>
                        <StyledFeaturesItem >
                            <span>07</span>
                            <h3>Репутация</h3>
                            <p>93 % клиентов рекомендуют нас своим бликим</p>
                        </StyledFeaturesItem>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeIn" duration={2} delay={500} animateOnce={true}>
                        <StyledFeaturesItem >
                            <span>08</span>
                            <h3>Номер 1 в АЗИИ</h3>
                            <p>Крупнейшая компания в Центральной Азии</p>
                        </StyledFeaturesItem>
                    </ScrollAnimation>
                </StyledFeaturesItems>
                <MainButton handleClick={handleClick} margin="90px auto 0" text="Получите консультацию прямо сейчас" />
            </Container>
        </StyledFeaturesSection>
    )
};

export default FeaturesSection;