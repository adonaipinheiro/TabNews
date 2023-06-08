import type {DrawerNavigationProp} from '@react-navigation/drawer';

import {TabParamList} from './Tabs';

export type DrawerParamList = {
  TabsRouter: NavigatorScreenParams<TabParamList>;
};

export type DrawerNavigationProps =
  DrawerNavigationProp<DrawerParamList>;
