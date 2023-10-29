import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthStack, BottomTabStack} from './stacks';
import {useAuth} from '../hooks/useAuth';
import {useLanguage} from '../hooks/useLanguage';
import i18n from '../translation/i18next';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  const auth = useAuth();
  const language = useLanguage();
  useEffect(() => {
    if (language) {
      i18n.changeLanguage(language);
    }
  });
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={auth.user ? 'BottomTabStack' : 'AuthStack'}>
      <Stack.Screen component={AuthStack} name="AuthStack" />
      <Stack.Screen component={BottomTabStack} name="BottomTabStack" />
    </Stack.Navigator>
  );
};

export default MainNavigator;
