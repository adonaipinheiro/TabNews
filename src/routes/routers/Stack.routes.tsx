import {
  StackNavigationOptions,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';

import {
  Institutional,
  Post,
  RecoverPass,
  SignIn,
  SignUp,
} from '@screens';
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
};

const tabNewsOptions: StackNavigationOptions = {
  headerShown: false,
};

const institutionalOptions: StackNavigationOptions = {
  headerTitleAlign: 'center',
};

const postOptions: StackNavigationOptions = {
  presentation: 'modal',
  animationEnabled: true,
};

export function StackRouter() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="TabNews"
        component={DrawerRouter}
        options={tabNewsOptions}
      />
      <Stack.Screen
        name="Institutional"
        component={Institutional}
        options={institutionalOptions}
      />
      <Stack.Screen
        name="Post"
        options={postOptions}
        component={Post}
      />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="RecoverPass" component={RecoverPass} />
    </Stack.Navigator>
  );
}
