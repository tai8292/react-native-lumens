import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MainTabNavigator from './MainTabNavigator';

const Stack = createStackNavigator();

const RootStackNavigator = (): React.ReactElement => {
  return (
    <Stack.Navigator
      initialRouteName={'MainTab'}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen component={MainTabNavigator} name={'MainTab'} />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
