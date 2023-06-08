import type {MaterialTopTabNavigationProp} from '@react-navigation/material-top-tabs';

export type TabParamList = {
  Relevant: undefined;
  Recent: undefined;
};

export type TabNavigationProps =
  MaterialTopTabNavigationProp<TabParamList>;
