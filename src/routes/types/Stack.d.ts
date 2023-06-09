import type {NavigatorScreenParams} from '@react-navigation/native';
import type {StackNavigationProp} from '@react-navigation/stack';

import {DrawerParamList} from './Drawer';

export type StackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  RecoverPass: undefined;
  Post: {
    title: string;
    slug: string;
    owner_username: string;
    tabcoins: number;
    children_deep_count: number;
  };
  Institutional: {
    url: string;
    title: string;
  };
  TabNews: NavigatorScreenParams<DrawerParamList>;
};

export type StackNavigationProps =
  StackNavigationProp<StackParamList>;
