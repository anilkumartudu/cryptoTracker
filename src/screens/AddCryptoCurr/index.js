import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Modal} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import * as actionTypes from '../../store/action';
import Theme from '../../theme';
import {CustomBtn} from '../../components';
import {
  MainView,
  Container,
  CustomText,
  CustomTextInput,
  CenterView,
  ModalView,
  ModalText,
} from './style';

const AddCryptoCurr = (props) => {
  const [isFocused, setIsFocused] = useState(false);
  const [cryptoCurrName, setCryptoCurrName] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [error, setError] = useState('');

  const backToListHandler = () => props.navigation.navigate('Home');

  const focusHandler = () => setIsFocused(true);

  const blurHandler = () => setIsFocused(false);

  const addHandler = () => {
    fetch(`https://data.messari.io/api/v1/assets/${cryptoCurrName}/metrics`)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw Error('Please check if the "key" is valid');
        }
      })
      .then((responseText) => props.onCryptoCurrDataStore(responseText.data))
      .catch((err) => {
        setError(`${err.message}`);
        setModalVisible(true);
      });
    // props.navigation.navigate('Home');
  };

  return (
    <KeyboardAwareScrollView>
      <MainView>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <CenterView>
            <ModalView>
              <ModalText>{error}</ModalText>
              <CustomBtn
                onPress={() => setModalVisible(false)}
                text="Close"
                textColor={Theme.colors.BUTTON_ACTIVE_TEXT_COLOR}
                isBtn={true}
              />
            </ModalView>
          </CenterView>
        </Modal>

        <Container style={{marginBottom: 200}}>
          <CustomBtn
            onPress={backToListHandler}
            text="Back to list"
            textColor={Theme.colors.THEME}
            icon="back"
          />
        </Container>

        <Container>
          <CustomText>Add a Cryptocurrency</CustomText>
          <CustomTextInput
            onChangeText={setCryptoCurrName}
            value={cryptoCurrName}
            placeholder="Use a name or ticket symbol..."
            onFocus={focusHandler}
            onBlur={blurHandler}
            borderColor={isFocused}
          />
          <CustomBtn
            onPress={addHandler}
            text="Add"
            textColor={Theme.colors.BUTTON_ACTIVE_TEXT_COLOR}
            isBtn={true}
          />
        </Container>
      </MainView>
    </KeyboardAwareScrollView>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCryptoCurrDataStore: (storeCrypto) =>
      dispatch({type: actionTypes.ADD_CRYPTO_CURR_DATA, storeCrypto}),
  };
};

export default connect(null, mapDispatchToProps)(AddCryptoCurr);
