import type {NavigatorScreenParams} from '@react-navigation/native';
import type {StackNavigationProp} from '@react-navigation/stack';

import {DrawerParamList} from './Drawer';

export type StackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  RecoverPass: undefined;
  TabNews: NavigatorScreenParams<DrawerParamList>;
};

export type StackNavigationProps =
  StackNavigationProp<StackParamList>;
