import styled from 'styled-components/native';

import Theme from '../../theme';

export const Button = styled.TouchableOpacity`
  align-self: flex-end;
  align-items: center;
  justify-content: center;
  background-color: ${Theme.colors.BUTTON_COLOR};
  height: 40px;
  width: 120px;
  border-radius: 5px;
`;

export const Link = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const CustomText = styled.Text`
  color: ${(props) => (props.color ? props.color : Theme.colors.BLACK)};
`;
