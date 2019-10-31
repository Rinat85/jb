import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { GlobalStyle } from './theme/globalStyle';
import { useTranslation } from 'react-i18next';

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

const Home = (props) => {

    const [ show, setShow ] = useState(false);
    const { t } = useTranslation();
  
    const handleClick = () => {
        setShow({show: !show});
    }

    return (
        <AppWrapper>
            <Header text={t("получить консультацию")} dataType="main" handleClick={handleClick} />
            <Header text={t("узнать подробнее")} dataType="migration" contentType="migration" NavDisplay="none" linkTo="/migration" />
            <MainSectionBottom text={t("узнать подробнее")} linkTo="/tourism" />
            <StickyMenus />
            <MainModal handleClick={handleClick} show={show} />
            <div id="bottom"></div>
        </AppWrapper>
    )
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