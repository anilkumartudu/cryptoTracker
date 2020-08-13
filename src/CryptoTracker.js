import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import MainContainer from './navigation/mainContainer';
import rootReducer from './store/reducers';
import Theme from './theme';

const store = createStore(rootReducer);

const CryptoTracker = () => {
  return (
    <Provider store={store}>
      <StatusBar
        backgroundColor={Theme.colors.THEME}
        barStyle="light-content"
      />
      <NavigationContainer>
        <MainContainer />
      </NavigationContainer>
    </Provider>
  );
};

export default CryptoTracker;
