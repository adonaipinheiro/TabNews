import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';

import {Routes} from '@routes';
import {store} from '@store';

import {$COLORS} from './utils/colors';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={$COLORS.primaryDark}
      />
      <Routes />
    </Provider>
  );
}
