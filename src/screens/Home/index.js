import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {FlatList} from 'react-native';

import * as actionTypes from '../../store/action';
import Theme from '../../theme';
import {CustomBtn, CustomCard} from '../../components';
import {MainView, Container} from './style';

const Home = (props) => {
  useEffect(() => {
    setCryptoCurrData([...props.cryptoArray]);
    console.log(cryptoCurrData);
  }, [props.cryptoArray, cryptoCurrData]);

  const [cryptoCurrData, setCryptoCurrData] = useState([]);

  const addCryptoCurrencyHandler = () =>
    props.navigation.navigate('AddCryptoCurr');

  return (
    <MainView>
      {cryptoCurrData ? (
        <FlatList
          data={cryptoCurrData}
          renderItem={({item}) => <CustomCard data={item} />}
          keyExtractor={(item) => item.id}
        />
      ) : null}
      <Container>
        <CustomBtn
          onPress={addCryptoCurrencyHandler}
          text="Add a Cryptocurrency"
          textColor={Theme.colors.THEME}
          icon="add"
        />
      </Container>
    </MainView>
  );
};

const mapStateToProps = (state) => {
  return {
    cryptoArray: state.cryptoArray,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCryptoCurrDataDelete: (cryptoId) =>
      dispatch({type: actionTypes.DELETE_COUNTER, cryptoId}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
