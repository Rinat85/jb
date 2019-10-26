import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import styled, { keyframes } from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Container from './Container';
import SectionHeader from './SectionHeader';

const mapStyles = {
    width: '100%',
    height: '586px',
};

const StyledMapSection = styled.section`
    width: 100%;
    height: 586px;
    overflow: hidden;
    position: relative;

    & > div {
        height: 586px !important;
        z-index: 100;
    }
`;

const StyledContactsWrap = styled.div`
    position: absolute;
    width: 100%;
    z-index: -1;

    & > div {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;

        @media screen and (max-width: 600px) {
            align-items: flex-end;
        }
    }

    @media screen and (max-width: 600px) {
        bottom: 30px;
    }

`;

const StyledContacts = styled.div`
    max-width: 350px;
    background-color: #fafafa;
    box-shadow: 0px 0px 29px 0px rgba(161,26,57,1);
    z-index: 999999;
    padding: 55px 63px;
    border-radius: 3px;

    h2 {
        font-size: 24px;
        margin-bottom: 47px;

        ::after {
            margin-top: 17px;
        }
    }

    @media screen and (max-width: 600px) {
       padding: 25px 10px 12px 33px; 

       h2 {
           font-size: 16px;
       }
    }
`;

const StyledPhonebar = styled.a`
    position: relative;
    margin: 0 auto;
    display: block;
    text-align: start;
    font-size: 16px;
    color: #3e3e3e;
    margin: 18px 0;

    ::before {
        content: url('../img/phone.png');
        position: absolute;
        top: 50%;
        left: -24px;
        transform: translateY(-45%);
    }
`;

const StyledAdressbar = styled(StyledPhonebar)`
    ::before {
        content: url('../img/placeholder.png');
    }
`;

const StyledMailbar = styled(StyledPhonebar)`

    @media screen and (max-width: 600px) {
        display: none;
    }

    ::before {
        content: url('../img/email.png');
    }
`;

const btnanimation = keyframes`
    0% {
        width: 78px;
        height: 78px;
    }

    50% {
        width: 108px;
        height: 108px;
    }

    100% {
        width: 78px;
        height: 78px;
    }
`;

const StyledHamburger = styled.span`
    position: absolute;
    left: 5vw;
    bottom: 8vh;
    display: block;
    z-index: 101;

    a {
        display: block;
        width: 78px;
        height: 78px;
        position: relative;
        border-radius: 50%;
        font-size: 32px;
        text-align: center;
        line-height: 78px;
        background-color: #9e1a38;
        box-shadow: 0px 0px 19px 0px rgba(161,26,57,1);

        ::after {
            content: '';
            display: block;
            width: 78px;
            height: 78px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 50%;
            background-color: transparent;
            border: 1px solid #9e1a38;
            animation: ${btnanimation} 2s linear infinite;
        }
    }

    @media screen and (max-width: 600px) {
        display: none;
    }

`;

const StyledUpBtn = styled.span`
    position: absolute;
    right: 5vw;
    bottom: 8vh;
    display: inline-block;
    z-index: 101;

    a {
        display: inline-block;
        position: relative;
        width: 82px;
        height: 46px;
        background: rgb(138,26,51);
        background: linear-gradient(180deg, rgba(138,26,51,1) 0%, rgba(28,27,23,1) 100%);
        color: white;
        font-size: 14px;
        text-align: center;
        line-height: 46px;
    }

    ::before {
        content: '';
        display: inline-block;
        width: 1px;
        height: 1px;
        position: absolute;
        left: 50%;
        top: -46px;
        transform: translateX(-50%);
        border: 41px solid transparent;
        border-top: 23px solid transparent;
        border-bottom: 23px solid #8a1a33;
    }

    ::after {
        content: url('../img/totop.png');
        position: absolute;
        top: -10px;
        left: 50%;
        transform: translateX(-50%);
    }

    @media screen and (max-width: 600px) {
        display: none;
    }
`;

export class MapSection extends Component {
    
    displayMarkers = () => {
        return <Marker position={{
            lat: 41.321011,
            lng: 69.2604266
        }}
            onClick={() => console.log("You clicked me!")} />
    }
  
    render() {
      return (
        <StyledMapSection id="contacts">
            <Map
                google={this.props.google}
                zoom={15.75}
                style={mapStyles}
                initialCenter={{ lat: 41.321011, lng: 69.2604266 }}
            >
                {this.displayMarkers()}
            </Map>
            <StyledContactsWrap>
                <Container>
                    <ScrollAnimation animateIn="fadeInRight" duration={2} animateOnce={true}>
                        <StyledContacts>
                            <SectionHeader text="Контакты" color="#333333" subcolor="#a11a39" />
                            <StyledPhonebar href="callto: +998951422242">+998 (95) 142 22 42</StyledPhonebar>
                            <StyledAdressbar href="https://www.google.ru/maps/place/iTeam+Web+Media/@41.321011,69.2604266,15z/data=!4m8!1m2!2m1!1siteam!3m4!1s0x0:0x1b2d145a90ce481c!8m2!3d41.3213358!4d69.2579681">ул. Респбуликанская оф 3</StyledAdressbar>
                            <StyledMailbar href="mailto: info@jbworldcompany.com">info@jbworldcompany.com</StyledMailbar>
                        </StyledContacts>
                    </ScrollAnimation>
                </Container>
            </StyledContactsWrap>
            <StyledHamburger>
                <a href="#!">
                    <FontAwesomeIcon icon={faBars} color="white" />
                </a>
            </StyledHamburger>
            <StyledUpBtn>
                <a href="#top" title="наверх">вверх</a>
            </StyledUpBtn>
        </StyledMapSection>
      );
    }
};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAdDtbkqNHgA_cA46T4LohOPr-uvwYLUnU'
})(MapSection);
