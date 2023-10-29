import {SafeAreaView, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import i18n from './src/translation/i18next';

import {persistor, store} from './src/store';
import MainNavigator from './src/navigation/MainNavigator';
import {navigationRef} from './src/utils/RootNavigation';
import {I18nextProvider} from 'react-i18next';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView style={styles.flex}>
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <NavigationContainer ref={navigationRef}>
              <MainNavigator />
            </NavigationContainer>
            <Toast />
          </PersistGate>
        </Provider>
      </I18nextProvider>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});
