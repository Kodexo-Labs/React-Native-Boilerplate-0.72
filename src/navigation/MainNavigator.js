import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthStack, BottomTabStack} from './stacks';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="BottomTabStack">
      <Stack.Screen component={AuthStack} name="AuthStack" />
      <Stack.Screen component={BottomTabStack} name="BottomTabStack" />
    </Stack.Navigator>
  );
};

export default MainNavigator;
