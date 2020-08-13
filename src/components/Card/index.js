import React from 'react';
import {Text} from 'react-native';

import {MainView, Container} from './style';

const Card = (props) => {
  return (
    <MainView>
      <Container alignItems="flex-start">
        <Text>{props.data.name}</Text>
        <Text>{props.data.symbol}</Text>
      </Container>
      <Container>
        <Text>{props.data.market_data.price_usd}</Text>
        <Text>{props.data.market_data.percent_change_usd_last_24_hours}</Text>
      </Container>
    </MainView>
  );
};

export default Card;
