import React from 'react';

import Theme from '../../theme';
import {MainView, Container, CustomText} from './style';

const Card = (props) => {
  const {name, symbol, market_data} = props.data;

  const {price_usd, percent_change_usd_last_24_hours} = market_data;

  const percentInUsd = Number(percent_change_usd_last_24_hours).toFixed(2);

  return (
    <MainView>
      <Container alignItems="flex-start">
        <CustomText>{name}</CustomText>
        <CustomText>{symbol}</CustomText>
      </Container>
      <Container>
        <CustomText>${Number(price_usd).toFixed(2)}</CustomText>
        <CustomText
          color={
            percentInUsd > 0 ? Theme.colors.UP_ARROW : Theme.colors.DOWN_ARROW
          }>
          {percentInUsd}%
        </CustomText>
      </Container>
    </MainView>
  );
};

export default Card;
