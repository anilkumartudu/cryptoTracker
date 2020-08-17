import styled from 'styled-components/native';

import Theme from '../../theme';

export const MainView = styled.View`
  flex: 1;
  padding: 25px;
`;

export const Container = styled.View``;

export const CustomText = styled.Text`
  font-size: 25px;
  margin-bottom: 25px;
`;

export const CustomTextInput = styled.TextInput`
  padding-horizontal: 10px;
  border: 1px solid
    ${(props) => (props.borderColor ? Theme.colors.BUTTON_COLOR : '#cfd5d9')};
  border-radius: 5px;
  background-color: #fafbfc;
  margin-bottom: 15px;
`;

export const CenterView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalView = styled.View`
  justify-content: center;
  align-items: center;
  background-color: ${Theme.colors.WHITE};
  padding: 20px;
  border: 2px solid ${Theme.colors.BUTTON_COLOR};
  border-radius: 5px;
  margin: 20px;
`;

export const ModalText = styled.Text`
  font-size: 20px;
  margin-bottom: 15px;
`;
