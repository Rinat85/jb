import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { GlobalStyle } from './theme/globalStyle';

import Header from './components/Header';
import StickyMenus from './components/StickyMenus';
import MainSectionBottom from './components/MainSectionBottom';
import Migration from './Migration';
import Tourism from './Tourism';
import MainModal from './components/MainModal';

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

class Home extends React.Component {

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
            <AppWrapper>
                <Header text="получить консультацию" dataType="main" handleClick={this.handleClick} />
                <Header text="узнать подробнее" dataType="migration" contentType="migration" NavDisplay="none" linkTo="/migration" />
                <MainSectionBottom text="узнать подробнее" linkTo="/tourism" />
                <StickyMenus />
                <MainModal handleClick={this.handleClick} show={this.state.show} />
                <div id="bottom"></div>
            </AppWrapper>
        )
    }
};


const App = () => {
    return (
        <Router>
            <>
                <GlobalStyle whiteColor />
                <Switch>
                    <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
                    <Route path={process.env.PUBLIC_URL + "/migration"} component={Migration} />
                    <Route path={process.env.PUBLIC_URL + "/tourism"} component={Tourism} />
                    <Route component={Home} />
                </Switch>
            </>
        </Router>
    )
};

export default App;