import styled from 'styled-components/native';

import Theme from '../../theme';

export const HeaderView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderText = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: ${Theme.colors.WHITE};
`;

export const HeaderImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;
