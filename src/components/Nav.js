import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import  Headroom  from "react-headroom";

import Container from './Container';
import Logo from '../img/nav-logo.png';
import Navbar from './Navbar';
import Navlangbar from './Navlangbar';
import NavHamburgerMenu from './NavHamburgerMenu';

const StyledNav = styled.nav`
    display: ${props => props.NavDisplay};
    background-color: rgba(47,47,47, 0.34);
    height: 64px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    z-index: 200;

    @media screen and (max-width: 600px) {
        position: relative;
    }

    @media screen and (min-width: 601px) and (max-width: 900px) {
        position: relative;
    }

`;

const StyledPhonebar = styled.div`
    display:none;
    position: absolute;
    top: 50%;
    left: 140px;
    transform: translateY(-50%);
    font-size: 16px;
    color: white;
    cursor: pointer;

    ::before {
        content: url('../img/phone.png');
        position: absolute;
        top: 50%;
        left: -24px;
        transform: translateY(-45%);
    }

    @media screen and (max-width: 600px) {
        color: white;
        display: block;
    }
`;

const NavItems = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 600px) {
        justify-content: center;
        flex-direction: column;
        padding-top: 64px;
        opacity: 1;
        width: 100vw;
        position: absolute;
        left: ${props => props.clicked ? '0' : '-100%'};
        transition: left 0.5s ease-in-out;
    }

    @media screen and (min-width: 601px) and (max-width: 900px) {
        justify-content: flex-start;
        flex-direction: column;
        padding-top: 64px;
        opacity: 1;
        width: 100vw;
        position: absolute;
        left: ${props => props.clicked ? '0' : '-100%'};
        transition: left 0.5s ease-in-out;
    }
    
`;

const NavLogo = styled.div`
    width: 108px;
    height: 71px;
    background: white url(${Logo}) no-repeat center center;

    @media screen and (max-width: 600px) {
        height: 64px;
        position: absolute;
        top: 0;
        left: 0;
    }

    @media screen and (min-width: 601px) and (max-width: 900px) {
        height: 64px;
        position: absolute;
        top: 0;
        left: 0;
    }
`;

class Nav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {clicked: false};
        this.menuHandler = this.menuHandler.bind(this);
        this.props = props;
    }

    menuHandler() {
        this.setState(state => ({
            clicked: !state.clicked
        }));
    }

    render() {
        return (
            <Headroom>
                <StyledNav NavDisplay={this.props.NavDisplay} id="nav">
                    <Container>
                        <NavItems clicked={this.state.clicked} >
                            <Link to="/">
                                <NavLogo />
                            </Link>
                            <Navbar dataType={this.props.dataType} />
                            <Navlangbar />
                        </NavItems>
                    </Container>
                    <StyledPhonebar href="callto: +998951422242">+998 (95) 142 22 42</StyledPhonebar>
                    <NavHamburgerMenu onPressMenu={this.menuHandler} clicked={this.state.clicked} />
                </StyledNav>
            </Headroom>
        )
    }
};

export default Nav;