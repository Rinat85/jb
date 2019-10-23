import React from 'react';
import styled from 'styled-components';

import { GlobalStyle } from './theme/globalStyle';
import Header from './components/Header';
import TourismMain from './components/TourismMain';
import Footer from './components/Footer';
import StickyMenus from './components/StickyMenus';
import MainModal from './components/MainModal';


const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

class Tourism extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  

  handleClick() {
    this.setState({
      show: !this.state.show
    });
  }

  render() {
    return (
      <>
          <GlobalStyle whiteColor />
          <AppWrapper>
              <div id="top"></div>
              <Header handleClick={this.handleClick} text="получить консультацию" dataType="tourism" contentType="tourism" />
              <TourismMain handleClick={this.handleClick} />
              <Footer dataType="tourism" />
              <StickyMenus />
              <MainModal handleClick={this.handleClick} show={this.state.show} />
              <div id="bottom"></div>
          </AppWrapper>
      </>
    );
  }
}

export default Tourism;
