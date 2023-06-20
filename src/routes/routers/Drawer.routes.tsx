import {
  DrawerNavigationOptions,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {$COLORS} from '@utils';

import {TabsRouter} from './Tabs.routes';
import {DrawerHeader} from '../components/DrawerHeader';
import {DrawerMenu} from '../components/DrawerMenu';
import {DrawerParamList} from '../types/Drawer';

const Drawer = createDrawerNavigator<DrawerParamList>();

const renderIcon = (name: string, color: string) => (
  <Icon
    name={name}
    color={color}
    size={14}
    light
    style={{width: 30}}
  />
);

const screenOptions: DrawerNavigationOptions = {
  headerTintColor: $COLORS.white,
  headerShadowVisible: false,
  headerStyle: {
    backgroundColor: $COLORS.primary,
  },
  headerTitle: () => <DrawerHeader />,
  headerTitleAlign: 'center',
  drawerActiveBackgroundColor: $COLORS.grayLight,
  drawerActiveTintColor: $COLORS.gray300,
  drawerType: 'front',
  drawerLabelStyle: {
    fontWeight: '600',
    fontSize: 14,
    marginLeft: -20,
  },
  swipeEdgeWidth: 40,
};

const tabRouterOptions: DrawerNavigationOptions = {
  drawerLabel: 'Início',
  drawerIcon: ({color}) => renderIcon('home', color),
};

export function DrawerRouter() {
  return (
    <Drawer.Navigator
      screenOptions={screenOptions}
      drawerContent={DrawerMenu}>
      <Drawer.Screen
        name="TabsRouter"
        component={TabsRouter}
        options={tabRouterOptions}
      />
    </Drawer.Navigator>
  );
}
