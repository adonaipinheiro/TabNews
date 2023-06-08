import {
  MaterialTopTabNavigationOptions,
  createMaterialTopTabNavigator,
} from '@react-navigation/material-top-tabs';
import React from 'react';

import {Recent, TabNews} from '@screens';
import {$COLORS} from '@utils';

import {TabParamList} from '../types/Tabs';

const screenOptions: MaterialTopTabNavigationOptions = {
  tabBarActiveTintColor: $COLORS.white,
  swipeEnabled: false,
  tabBarStyle: {
    backgroundColor: $COLORS.primary,
  },
  tabBarIndicatorStyle: {
    backgroundColor: $COLORS.grayDark,
    height: 4,
  },
  tabBarLabelStyle: {
    textTransform: 'capitalize',
    fontSize: 16,
    fontWeight: '600',
  },
};

const relevantOptions: MaterialTopTabNavigationOptions = {
  tabBarLabel: 'Relevantes',
};

const recentOptions: MaterialTopTabNavigationOptions = {
  tabBarLabel: 'Recentes',
};

const Tab = createMaterialTopTabNavigator<TabParamList>();

export function TabsRouter() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Relevant"
        component={TabNews}
        options={relevantOptions}
      />
      <Tab.Screen
        name="Recent"
        component={Recent}
        options={recentOptions}
      />
    </Tab.Navigator>
  );
}
