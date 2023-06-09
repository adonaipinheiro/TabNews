import {
  StackNavigationOptions,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';

import {RecoverPass, SignIn, SignUp} from '@screens';
import {$COLORS} from '@utils';

import {DrawerRouter} from './Drawer.routes';
import {StackParamList} from '../types/Stack';

const Stack = createStackNavigator<StackParamList>();

const screenOptions: StackNavigationOptions = {
  title: '',
  animationEnabled: false,
  headerTintColor: $COLORS.white,
  headerShadowVisible: false,
  headerStyle: {
    backgroundColor: $COLORS.primary,
  },
  headerTitle: '',
  headerBackTitle: ' ',
  detachPreviousScreen: true,
};

const tabNewsOptions: StackNavigationOptions = {
  headerShown: false,
};

export function StackRouter() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="TabNews"
        component={DrawerRouter}
        options={tabNewsOptions}
      />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="RecoverPass" component={RecoverPass} />
    </Stack.Navigator>
  );
}
