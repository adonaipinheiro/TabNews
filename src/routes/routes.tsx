import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {StackRouter} from './routers/Stack.routes';
import {useRoutes} from './useRoutes';

export function Routes() {
  const {navigationRef, onReady, onScreenChange} = useRoutes();

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={onReady}
      onStateChange={onScreenChange}>
      <StackRouter />
    </NavigationContainer>
  );
}
