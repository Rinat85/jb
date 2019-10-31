import React from 'react';
import styled from 'styled-components';
import MainButton from './MainButton';
import HeaderBannerLogo from '../img/header-logo.png';
import { useTranslation } from 'react-i18next';

const StyledHeaderBanner = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 65px;
    width: 60%;
    margin-left: 40%;

    @media screen and (max-width: 600px) {
        width: 100%;
        margin: 0 auto;
        padding-top: 35px;
    }
`;

const StyledHeaderBannerLogo = styled.div`
    width: 258px;
    height: 141px;
    background: url(${HeaderBannerLogo}) no-repeat center center;
    background-size: cover;

    @media screen and (max-width: 600px) {
        width: 129px;
        height: 70px;
        margin: 0 auto;
    }
`;

const StyledHeaderBannerTitle = styled.h1`
    position: relative;
    margin: 22px 22px 100px 60px;
    font-size: 48px;
    color: white;
    text-transform: uppercase;

    ::before {
        content: '';
        display: block;
        position: absolute;
        width: 118px;
        height: 1px;
        background-color: white;
        left: 0;
        bottom: -37px;
    }

    ::after {
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: rgba(255, 255, 255, 0.3);
        right: -100%;
        top: 50%;
        margin-left: 14px;
        transform: translateY(-50%);
    }

    @media screen and (max-width: 600px) {
        font-size: 32px;
        line-height: 1.5em;
        margin: 30px auto;
        text-align: center;

        ::after {
            display: none;
        }

        ::before {
            bottom: -18px;
            left: 50%;
            transform: translateX(-50%);
        }
    }

    @media screen and (min-width: 601px) and (max-width: 900px) {
        font-size: 32px;
        line-height: 1.5em;
        margin-bottom: 30px;

        ::before {
            bottom: -18px;
        }
    }

    @media screen and (min-width: 901px) and (max-width: 1200px) {
        font-size: 32px;
        line-height: 1.5em;
    }
`;

const StyledHeaderBannerText = styled.p`
    margin-left: 60px;
    margin-bottom: 36px;
    padding-right: 45px;
    color: white;
    font-size: 14px;
    font-family: 'GothamPro-Light';
    line-height: 2em;

    @media screen and (max-width: 600px) {
        width: 70%;
        line-height: 1.5em;
        text-align: justify;
        font-size: 14px;
        padding-right: 0;
        margin: 36px auto; 
    }
`;


const TourismHeaderContent = (props) => {

    const { text, handleClick, linkTo } = props;
    const { t } = useTranslation();

    return (
        <StyledHeaderBanner>
            <StyledHeaderBannerLogo />
            <StyledHeaderBannerTitle>
                {t("туризм")}
            </StyledHeaderBannerTitle>
            <StyledHeaderBannerText>
                {t("текст банера главная туризм")}
            </StyledHeaderBannerText>
            <MainButton handleClick={handleClick} text={text} margin="0 0 197px 60px" linkTo={linkTo} />
        </StyledHeaderBanner>
    )
};

export default TourismHeaderContent;