import React from 'react';
import styled from 'styled-components';

const StyledScrolldownWrap = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
`;

const StyledScroll = styled.a`
position: relative;
    height: 38px;
    width: 28px;
    margin-bottom: 15px;
    border-radius: 17px;
    border: 3px solid rgba(255, 255, 255, 0.3);

    ::before {
        content: '';
        position: absolute;
        display: inline-block;
        width: 4px;
        height: 8px;
        top: 4px;
        left: 50%;
        transform: translateX(-50%);
        background-color: rgba(255, 255, 255, 0.3);
        border-radius: 2px;
    }
`;

const StyledScrollText = styled.span`
    display: inline-block;
    margin-bottom: 12px;
    font-size: 10px;
    color: rgba(255, 255, 255, 0.3);
    text-transform: uppercase;

    @media screen and (max-width: 600px) {
        margin-bottom: 5px;
    }
`;

const StyledScrollLine = styled.div`
    display: inline-block;
    width: 1px;
    height: 51px;
    background-color: rgba(255, 255, 255, 0.3);

    @media screen and (max-width: 600px) {
        height: 11px;
    }
`;

const HeaderScrollDown = () => {
    return (
        <StyledScrolldownWrap>
            <StyledScroll href="#!" />
            <StyledScrollText>
                вниз
            </StyledScrollText>
            <StyledScrollLine />
        </StyledScrolldownWrap>
    )
};

export default HeaderScrollDown;