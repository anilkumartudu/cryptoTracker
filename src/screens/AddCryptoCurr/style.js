import styled from 'styled-components/native';

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
  border: 1px solid ${(props) => (props.borderColor ? '#F8D15D' : '#cfd5d9')};
  border-radius: 5px;
  background-color: #fafbfc;
  margin-bottom: 15px;
`;
