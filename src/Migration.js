import React from 'react';
import styled from 'styled-components';


import Header from './components/Header';
import MigrationMain from './components/MigrationMain';
import Footer from './components/Footer';
import StickyMenus from './components/StickyMenus';
import MainModal from './components/MainModal';


const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

class Migration extends React.Component {

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
      <React.Fragment>
        <AppWrapper>
          <div id="top"></div>
          <Header text="получить консультацию" handleClick={this.handleClick} dataType="migration" contentType="migration" linkTo="#!" />
          <MigrationMain handleClick={this.handleClick} />
          <Footer dataType="migration" />
          <StickyMenus />
          <MainModal handleClick={this.handleClick} show={this.state.show} />
          <div id="bottom"></div>
        </AppWrapper>
      </React.Fragment>
    );
  }  
}

export default Migration;
