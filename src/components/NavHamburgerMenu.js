import React from 'react';
import styled from 'styled-components';

const StyledHamburgerMenu = styled.div`
    display: none;
    cursor: pointer;
    position: absolute;
    right: 4vw;
    top: 50%;
    transform: translateY(-50%);

    @media screen and (max-width: 600px) {
        display: inline-block;
    }

    @media screen and (min-width: 601px) and (max-width: 900px) {
        display: inline-block;
    }
`;

const StyledHamburgerItem = styled.div`
    width: 35px;
    height: 5px;
    background-color: white;
    margin: 6px 0;
    transition: 0.4s;

    :first-child {
        transform: ${props => props.clicked ? 'rotate(-45deg) translate(-9px, 6px)' : 'none'};
    }

    :nth-child(2) {
        opacity: ${props => props.clicked ? '0' : '1'};
    }

    :nth-child(3) {
        transform: ${props => props.clicked ? 'rotate(45deg) translate(-8px, -8px)' : 'none'};
    }
`;

class NavHamburgerMenu extends React.Component {

    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
      }

    clickHandler() {
        this.props.onPressMenu();
    }

    render() {
        return (
            <StyledHamburgerMenu onClick={this.clickHandler}>
                <StyledHamburgerItem clicked={this.props.clicked} />
                <StyledHamburgerItem clicked={this.props.clicked} />
                <StyledHamburgerItem clicked={this.props.clicked} />
            </StyledHamburgerMenu>
        )
    }
};

export default NavHamburgerMenu;