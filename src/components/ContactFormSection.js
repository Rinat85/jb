import React, { useState, useReducer } from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import { useTranslation } from 'react-i18next';

import Container from './Container';
import SectionHeader from './SectionHeader';
import Bg from '../img/contactform-bg.png';

const StyledContactFormSection = styled.section`
    padding: 97px 0 67px 0;
    background: url(${Bg}) no-repeat right center;
    
    button a {
        padding: 0 30px;
    }

    
    h4 {
        font-size: 30px;
        color: #333333;
        text-align: center;
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

const STyledContactButton = styled.button`
    position: relative;
    width: 360px;
    padding: 23px 34px 23px 34px;
    margin : 50px auto 0 auto;
    font-size: 16px;
    transform: skew(-15deg);
    background-color: #a11a39;
    color: transparent;
    text-transform: uppercase;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    text-align: center;

    ::before {
        content: "${props => props.btnname ? props.btnname : ''}";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) skew(15deg);
        color: white;
        font-size: 16px;
        width: 100%;
    }

    ::placeholder {
        transform: skew(15deg);
        color: #dcdcdc;
    }

    :focus {
        outline: none;
    }

    :hover {
        box-shadow: 0px 0px 19px 0px rgba(161,26,57,1);
        transform: skewX(-15deg) scale(1.1);
    }


    @media screen and (max-width: 600px) {
       margin: 12px auto;
       width: 256px;

       ::before {
           font-size: 14px;
           width: 100%;
       }
    }

    @media screen and (min-width: 601px) and (max-width: 900px) {
        margin: 12px auto;
       width: 256px;

       ::before {
           font-size: 14px;
           width: 100%;
       }
    }

    @media screen and (min-width: 901px) and (max-width: 1200px) {
        margin: 12px auto;
    }
`;

const ContactFormSection = (props) => {

    const { t } = useTranslation();
    const [ userInput, setUserInput ] = useReducer(
        (state, newState) => ({...state, ...newState}),
        {
            name: '',
            work: '',
            country: '',
            phone: ''
        }
    );
    const [isSent, setIsSent] = useState(false);
   
    const handleInputChange = e => {
        const { name, value } = e.target;
        
        setUserInput({[name]: value});
    };

    const handleSubmit = e => {
        e.preventDefault();
        fetch('/migration.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                name: userInput.name, 
                work: userInput.work, 
                country: userInput.country, 
                phone: userInput.phone
            }),
        }).then(res => res.text())
        .then(() => setIsSent(true))
        .catch(err => console.log(err));
    };


    return (
        <StyledContactFormSection>
            <Container>
                <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce={true}>
                    <SectionHeader text={t("Ответьте на пару вопросов")} color="#2d2d2d" subcolor="#a11a39" />
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" duration={2} delay={300} animateOnce={true}>
                {!isSent &&
                    (<StyledContactForm onSubmit={handleSubmit}>
                        <STyledContactInput type="text" name="name" value={userInput.name} onChange={handleInputChange} placeholder={t("Ваше имя")} required />
                        <STyledContactInput type="text" name="work" value={userInput.work} onChange={handleInputChange} placeholder={t("Желаемая работа")} required />
                        <STyledContactInput type="text" name="country" value={userInput.country} onChange={handleInputChange} placeholder={t("Страна")} required />
                        <STyledContactInput type="text" name="phone" value={userInput.phone} onChange={handleInputChange} placeholder={t("Ваш телефон")} required />
                        <STyledContactButton type="submit" btnname={t("Измените жизнь")}>Измените жизнь</STyledContactButton>
                    </StyledContactForm>)
                }
                {isSent && 
                (<h4>{t("Благодарим за заявку! Наши менеджеры свяжутся с вами.")}</h4>)}
                </ScrollAnimation>
            </Container>
        </StyledContactFormSection>
    )
};

export default ContactFormSection;