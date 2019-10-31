import React from 'react';
import styled from 'styled-components';
import MainButton from './MainButton';
import MainHeaderLogo from '../img/main-header-logo.png';
import { useTranslation } from 'react-i18next';

const StyledHeaderBanner = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 65px;
    width: 100%;
    margin: 0 auto;

    @media screen and (max-width: 600px) {
        padding-top: 35px;
    }
`;

const StyledHeaderBannerLogo = styled.div`
    width: 452px;
    height: 250px;
    margin: 0 auto;
    background: url(${MainHeaderLogo}) no-repeat center center;
    background-size: cover;

    @media screen and (max-width: 600px) {
        width: 129px;
        height: 70px;
    }
`;

const StyledHeaderBannerTitle = styled.h1`
    position: relative;
    margin: 22px 22px 47px 60px;
    font-size: 24px;
    color: white;
    text-transform: unset;
    text-align: center;

    ::before {
        content: '';
        display: block;
        position: absolute;
        width: 118px;
        height: 1px;
        background-color: #9e1a38;
        left: 50%;
        transform: translateX(-50%);
        bottom: -23px;
    }

    @media screen and (max-width: 600px) {
        font-size: 24px;
        line-height: 1.5em;
        margin: 30px 0;
        text-align: center;

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
    margin: 0 auto 36px;
    color: white;
    font-size: 16px;
    font-family: 'GothamPro-Light';
    line-height: 1.5em;
    text-align: center;

    @media screen and (max-width: 600px) {
        width: 70%;
        line-height: 1.5em;
        text-align: justify;
        font-size: 14px;
        margin: 36px auto;
    }

    @media screen and (min-width: 601px) and (max-width: 900px) {
        width: 70%;
    }

    @media screen and (min-width: 901px) and (max-width: 1200px) {
        width: 70%;
    }
`;


const MainHeaderContent = (props) => {

    const { handleClick, text } = props;
    const { t } = useTranslation();

    return (
        <StyledHeaderBanner>
            <StyledHeaderBannerLogo />
            <StyledHeaderBannerTitle>
                {t("Ваш надежный партнер")}
            </StyledHeaderBannerTitle>
            <StyledHeaderBannerText>
                {t("текст банера главная главная")}
            </StyledHeaderBannerText>
            <MainButton handleClick={handleClick} text={text} margin="37px auto 78px" />
        </StyledHeaderBanner>
    )
};

export default MainHeaderContent;