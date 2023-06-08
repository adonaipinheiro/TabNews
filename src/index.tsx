import React from 'react';
import {StatusBar} from 'react-native';

import {SignUp} from '@screens';

import {$COLORS} from './utils/colors';

export default function App() {
  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={$COLORS.primaryDark}
      />
      <SignUp />
    </>
  );
}
