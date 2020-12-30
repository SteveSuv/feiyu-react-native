import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import AppRouter from './router';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './store';
import SplashScreen from 'react-native-splash-screen';

const store = createStore(reducer);

export default () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};
