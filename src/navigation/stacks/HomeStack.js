import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, HomeScreen2} from '../../screens';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home">
      <Stack.Screen component={Home} name="Home" />
      <Stack.Screen component={HomeScreen2} name="HomeScreen2" />
    </Stack.Navigator>
  );
};

export default HomeStack;
