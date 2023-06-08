import {
  StackNavigationOptions,
  createStackNavigator,
} from '@react-navigation/stack';
import React, {useMemo} from 'react';

import {RecoverPass, SignIn, SignUp} from '@screens';
import {$COLORS} from '@utils';

import type {StackParamList} from './types';

const Stack = createStackNavigator<StackParamList>();

export function StackRouter() {
  const screenOptions: StackNavigationOptions = useMemo(
    () => ({
      title: '',
      animationEnabled: false,
      headerTintColor: $COLORS.white,
      headerShadowVisible: false,
      headerStyle: {
        backgroundColor: $COLORS.primary,
      },
      headerTitle: '',
      headerBackTitle: ' ',
    }),
    [],
  );

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="RecoverPass" component={RecoverPass} />
    </Stack.Navigator>
  );
}
