import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {AddCryptoCurrScreen, HomeScreen} from '../screens';
import {CustomHeader} from '../components';
import Theme from '../theme';

const Stack = createStackNavigator();

const MainContainer = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="AddCryptoCurr"
        component={AddCryptoCurrScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: {height: 100, backgroundColor: Theme.colors.THEME},
          headerTitle: (props) => <CustomHeader />,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainContainer;
