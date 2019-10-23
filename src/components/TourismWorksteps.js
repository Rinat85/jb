import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';

import Container from './Container';
import SectionHeader from './SectionHeader';
import Bg from '../img/tourism-worksteps-bg.png';

const StyledWorkstepsSection = styled.section`
    padding: 97px 0 67px 0;
    background: url(${Bg}) no-repeat center center;
    background-size: cover;

    @media screen and (max-width: 600px) {
        padding: 37px 0 57px 0;
    }
`;

const StyledWorkstepsItems = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: stretch;

    @media screen and (max-width: 600px) {
        flex-wrap: wrap;
    }
`;

const StyledWorkstepsItem = styled.div`
    width: 24%;
    text-align: center;
    margin: 35px auto;
    position: relative;
    padding: 0 10px;

    p {
        font-family: 'GothamPro-Light';
        font-size: 16px;
        color: #ffffff;
        line-height: 2em;
    }

    img {
        margin-left: 21px;
        margin-bottom: 28px;
    }

    

    @media screen and (max-width: 600px) {
        width: 100%;
        padding: 0 5vw;
        margin: 0 auto 20px;

        img {
            
            margin: 20px 0;
        }

    }
`;

const TourismWorksteps = () => {
    return (
        <StyledWorkstepsSection id="works">
            <Container>
                <SectionHeader text="Как мы работаем" color="#ffffff" subcolor="#ffffff" />
                <StyledWorkstepsItems>
                    <StyledWorkstepsItem>
                        <ScrollAnimation animateIn="tada" initiallyVisible={true} duration={1} animateOnce={true}>
                            <img src="../img/workstep1.png" alt="step1" />
                        </ScrollAnimation>
                        <p>Вы оставляете завку на подбор тура</p>
                    </StyledWorkstepsItem>
                    <StyledWorkstepsItem>
                        <ScrollAnimation animateIn="tada" initiallyVisible={true} duration={1} delay={1000} animateOnce={true}>
                            <img src="../img/workstep2.png" alt="step2" />
                        </ScrollAnimation>
                        <p>Наши специалисты подбирают Вам лучшее предложение</p>
                    </StyledWorkstepsItem>
                    <StyledWorkstepsItem>
                        <ScrollAnimation animateIn="tada" initiallyVisible={true} duration={1} delay={2000} animateOnce={true}>
                            <img src="../img/workstep3.png" alt="step3" />
                        </ScrollAnimation>
                        <p>Быстро оформляем документы</p>
                    </StyledWorkstepsItem>
                    <StyledWorkstepsItem>
                        <ScrollAnimation animateIn="tada" initiallyVisible={true} duration={1} delay={3000} animateOnce={true}>
                            <img src="../img/workstep4.png" alt="step4" />
                        </ScrollAnimation>
                        <p>Вы летите отдыхать</p>
                    </StyledWorkstepsItem>
                </StyledWorkstepsItems>
            </Container>
        </StyledWorkstepsSection>
    )
};

export default TourismWorksteps;