import React from 'react';
import Svg, {Path} from 'react-native-svg';

import Theme from '../../theme';

const Icon = (props) => {
  const {name} = props;

  if (name === 'add') {
    return (
      <Svg
        viewBox="0 0 24 24"
        fill={Theme.colors.ADD}
        width="10px"
        height="10px">
        <Path d="M0 0h24v24H0z" fill="none" />
        <Path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
      </Svg>
    );
  } else if (name === 'back') {
    return (
      <Svg
        viewBox="0 0 24 24"
        fill={Theme.colors.BACK}
        width="10px"
        height="10px">
        <Path d="M0 0h24v24H0z" fill="none" />
        <Path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z" />
      </Svg>
    );
  } else if (name === 'up') {
    return (
      <Svg
        viewBox="0 0 24 24"
        fill={Theme.colors.UP_ARROW}
        width="24px"
        height="24px">
        <Path d="M0 0h24v24H0z" fill="none" />
        <Path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5z" />
      </Svg>
    );
  } else if (name === 'down') {
    return (
      <Svg
        viewBox="0 0 24 24"
        fill={Theme.colors.DOWN_ARROW}
        width="24px"
        height="24px">
        <Path d="M0 0h24v24H0z" fill="none" />
        <Path d="M20 5.41L18.59 4 7 15.59V9H5v10h10v-2H8.41z" />
      </Svg>
    );
  }
};

export default Icon;
