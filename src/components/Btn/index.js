import React from 'react';

import {Button, Link, CustomText} from './style';
import Icon from '../Icon';

const Btn = (props) => {
  const {onPress, text, textColor, isBtn, icon} = props;

  return (
    <>
      {isBtn ? (
        <Button onPress={onPress}>
          <CustomText color={textColor}>{text}</CustomText>
        </Button>
      ) : (
        <Link onPress={onPress}>
          <Icon name={icon} />
          <CustomText color={textColor}>{text}</CustomText>
        </Link>
      )}
    </>
  );
};

export default Btn;
