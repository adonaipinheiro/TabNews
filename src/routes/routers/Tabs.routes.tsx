import {
  MaterialTopTabNavigationOptions,
  createMaterialTopTabNavigator,
} from '@react-navigation/material-top-tabs';
import React from 'react';

import {Posts} from '@screens';
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
      <Tab.Screen name="Relevant" options={relevantOptions}>
        {() => <Posts strategy="relevant" />}
      </Tab.Screen>
      <Tab.Screen name="Recent" options={recentOptions}>
        {() => <Posts strategy="new" />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
