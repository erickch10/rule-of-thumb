import React from 'react';
import HeaderContent from './Styled/StyledHeaderContent';
import Menu from '../Menu';
import PageTitle from './PageTitle';
import Search from './Search';
import MenuToggle from './MenuToggle';
import StyledHeader from './Styled/StyledHeader';
import { THEMES } from '../../Constants';

export default ({ pageTitle = '', theme = THEMES.light }) => (
  <StyledHeader theme={theme}>
    <HeaderContent>
      <PageTitle>
        {pageTitle}
      </PageTitle>
      <Menu className="main-menu" />
      <Search />
      <MenuToggle />
    </HeaderContent>
  </StyledHeader>
);
