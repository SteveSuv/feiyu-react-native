import React from 'react';
import 'react-native-gesture-handler';
import AppRouter from './router';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './store';
import { ModalPortal } from 'react-native-modals';

const store = createStore(reducer);

export default () => {
  return (
    <Provider store={store}>
      <AppRouter />
      <ModalPortal />
    </Provider>
  );
};
