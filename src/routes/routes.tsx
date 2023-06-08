import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {StackRouter} from './routers/Stack.routes';

export function Routes() {
  return (
    <NavigationContainer>
      <StackRouter />
    </NavigationContainer>
  );
}
