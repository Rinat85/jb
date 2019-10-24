import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';

import Container from './Container';
import SectionHeader from './SectionHeader';
import MainButton from './MainButton';
import Bg from '../img/contactform-bg.png';

const StyledContactFormSection = styled.section`
    padding: 97px 0 67px 0;
    background: url(${Bg}) no-repeat right center;
    
    button {
        margin-left: calc(50% - 180px);
    }

    button a {
        padding: 0 30px;
    }

    @media screen and (max-width: 600px) {
        padding: 37px 0 57px 0;

        button {
            margin: 24px auto 0;
        }
    }
`;

const StyledContactForm = styled.form`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    a {
        margin: 0 auto;
    }

    @media screen and (max-width: 600px) {
       flex-direction: column;

       a {
        margin: 0;
       }
       
    }

    @media screen and (min-width: 601px) and (max-width: 900px) {
       flex-direction: column;
    }

    @media screen and (min-width: 901px) and (max-width: 1200px) {
        padding: 0 20%;
        justify-content: center;
    }
`;

const STyledContactInput = styled.input`
    max-width: 256px;
    padding: 22px 34px 20px 34px;
    border: 1px solid #dcdcdc;
    font-size: 16px;
    transform: skew(-15deg);

    ::placeholder {
        transform: skew(15deg);
        color: #828282;
    }

    :focus {
        outline: none;
    }

    @media screen and (max-width: 600px) {
       margin: 12px auto;
    }

    @media screen and (min-width: 601px) and (max-width: 900px) {
        max-width: 40%; 
       margin: 12px auto;
    }

    @media screen and (min-width: 901px) and (max-width: 1200px) {
        margin: 12px auto;
    }
`;

const ContactFormSection = () => {
    return (
        <StyledContactFormSection>
            <Container>
                <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce={true}>
                    <SectionHeader text="Ответьте на пару вопросов" color="#2d2d2d" subcolor="#a11a39" />
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" duration={2} delay={300} animateOnce={true}>
                    <StyledContactForm>
                        <STyledContactInput type="text" placeholder="Ваше имя" required />
                        <STyledContactInput type="text" placeholder="Желаемая работа" required />
                        <STyledContactInput type="text" placeholder="Страна" required />
                        <STyledContactInput type="text" placeholder="Ваш телефон" required />
                        <MainButton type="submit" margin="50px auto 0 auto" text="Измените жизнь" required />
                    </StyledContactForm>
                </ScrollAnimation>
            </Container>
        </StyledContactFormSection>
    )
};

export default ContactFormSection;