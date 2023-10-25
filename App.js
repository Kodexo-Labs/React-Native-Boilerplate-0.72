import {SafeAreaView, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import Toast from 'react-native-toast-message';

import {Provider} from 'react-redux';
import {store} from './src/store';
import MainNavigator from './src/navigation/MainNavigator';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <SafeAreaView style={styles.flex}>
      <Provider store={store}>
        <NavigationContainer>
          <MainNavigator />
          <Toast />
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});
