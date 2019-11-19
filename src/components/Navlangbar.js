import React from 'react';
import styled from 'styled-components';

import NavlangbarList from './NavlangbarList';

const StyledNavlangbarWrap = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    padding-left: 17px;

    @media screen and (max-width: 600px) {
        justify-content: flex-end;
        background-color: white;
        color: #2d2d2d;
    }

    @media screen and (min-width: 601px) and (max-width: 900px) {
        justify-content: center;
        background-color: white;
        color: #2d2d2d;
    }

    @media screen and (min-width: 901px) and (max-width: 1200px) {
        padding-left: 10px;
    }  
`;

const StyledPhonebar = styled.a`
    position: relative;
    margin-right: 14px;
    font-size: 16px;
    color: white;
    cursor: pointer;
    transition: text-shadow 0.3s ease-in-out;

    &:hover {
        text-shadow: -1px -1px 9px rgba(246,242,242,0.84);
    }

    ::before {
        content: url('../img/phone.png');
        position: absolute;
        top: 50%;
        left: -24px;
        transform: translateY(-45%);
    }

    @media screen and (max-width: 600px) {
        color: #2d2d2d;
    }

    @media screen and (min-width: 601px) and (max-width: 900px) {
        color: #2d2d2d;
    } 

    @media screen and (min-width: 901px) and (max-width: 1200px) {
        font-size: 14px;
    } 

    @media screen and (min-width: 901px) and (max-width: 1023px) {
        font-size: 12px;
    }
`;

const Navlangbar = () => {
    return (
        <StyledNavlangbarWrap>
            <StyledPhonebar href="callto: +998951422242">+998 (95) 142 22 42</StyledPhonebar>
            <NavlangbarList />
        </StyledNavlangbarWrap>
    )
};

export default Navlangbar;