import styled from 'styled-components/native';

import Theme from '../../theme';

export const MainView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-vertical: 20px;
  border-bottom-width: 2px;
  border-bottom-color: ${Theme.colors.BUTTON_DISABLE_TEXT_COLOR};
  margin: 20px;
`;

export const Container = styled.View`
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'flex-end')};
`;
