import React from 'react';

import {HeaderView, HeaderText, HeaderImage} from './style';

const Header = (props) => {
  return (
    <HeaderView>
      <HeaderText>CryptoTracker Pro</HeaderText>
      <HeaderImage source={require('../../assets/person.jpg')} />
    </HeaderView>
  );
};

export default Header;
