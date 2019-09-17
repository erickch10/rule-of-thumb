import React from 'react';
import GlobalStyles from '../Components/Global/GlobalStyles';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { THEMES } from '../Constants';

export default ({ children, pageTitle = '', theme = THEMES.light }) => (
  <React.Fragment>
    <Header pageTitle={pageTitle} theme={theme} />
    {children}
    <Footer />
    <GlobalStyles />
  </React.Fragment>
);
