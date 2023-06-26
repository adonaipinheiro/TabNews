import {
  DrawerContentComponentProps,
  DrawerItem,
  DrawerItemList,
  DrawerNavigationOptions,
} from '@react-navigation/drawer';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {getBuildNumber, getVersion} from 'react-native-device-info';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {Divider} from '@components';
import {StackNavigationProps} from '@routes';
import {$COLORS} from '@utils';
import {DrawerNavigationProps} from 'src/routes/types/Drawer';

import styles from './styles';

const renderIcon = (name: string, color: string) => (
  <Icon
    name={name}
    color={color}
    size={14}
    light
    style={styles.icon}
  />
);

export const DrawerMenu = (props: DrawerContentComponentProps) => {
  const {navigate} = useNavigation<StackNavigationProps>();
  const drawer = useNavigation<DrawerNavigationProps>();

  const screenOptions: DrawerNavigationOptions = {
    drawerLabelStyle: {
      fontWeight: '600',
      fontSize: 14,
      marginLeft: -20,
    },
  };

  function navigateToInstitutionalScreen(title: string, url: string) {
    drawer.dispatch(DrawerActions.closeDrawer());
    navigate('Institutional', {
      title,
      url,
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <SafeAreaView edges={['top']} style={styles.headerContent}>
          <View style={styles.iconArea}>
            <Icon solid name="user" size={24} color={$COLORS.black} />
          </View>
          <Divider size={14} />
          <Text onPress={() => {}} style={styles.signInUpText}>
            TabNews
          </Text>
        </SafeAreaView>
      </View>
      <Divider size={10} />
      <ScrollView style={styles.scrollView}>
        <DrawerItemList {...props} />
        <DrawerItem
          labelStyle={screenOptions.drawerLabelStyle}
          label={'Contato'}
          icon={({color}) => renderIcon('users', color)}
          onPress={() => {
            navigateToInstitutionalScreen(
              'Contato',
              'https://www.tabnews.com.br/contato',
            );
          }}
          {...props}
        />
        <DrawerItem
          labelStyle={screenOptions.drawerLabelStyle}
          label={'Museu'}
          icon={({color}) => renderIcon('history', color)}
          onPress={() => {
            navigateToInstitutionalScreen(
              'Museu',
              'https://www.tabnews.com.br/museu',
            );
          }}
          {...props}
        />
        <DrawerItem
          labelStyle={screenOptions.drawerLabelStyle}
          label={'Sobre'}
          icon={({color}) => renderIcon('address-book', color)}
          onPress={() => {
            navigateToInstitutionalScreen(
              'Sobre',
              'https://www.tabnews.com.br/filipedeschamps/tentando-construir-um-pedaco-de-internet-mais-massa',
            );
          }}
          {...props}
        />
        <DrawerItem
          labelStyle={screenOptions.drawerLabelStyle}
          label={'Status'}
          icon={({color}) => renderIcon('chart-bar', color)}
          onPress={() => {
            navigateToInstitutionalScreen(
              'Status',
              'https://www.tabnews.com.br/status',
            );
          }}
          {...props}
        />
        <DrawerItem
          labelStyle={screenOptions.drawerLabelStyle}
          label={'Termos de uso'}
          icon={({color}) => renderIcon('file-alt', color)}
          onPress={() => {
            navigateToInstitutionalScreen(
              'Termos de uso',
              'https://www.tabnews.com.br/termos-de-uso',
            );
          }}
          {...props}
        />
      </ScrollView>
      <SafeAreaView edges={['bottom']}>
        {/* <DrawerItem
          pressColor={$COLORS.pink}
          inactiveTintColor={$COLORS.red}
          label={'Deslogar'}
          onPress={() => {}}
        /> */}
        <View style={styles.versionArea}>
          <Text style={styles.versionText}>
            Versão: {getVersion()}
          </Text>
          <Text style={styles.versionText}>
            Build: {getBuildNumber()}
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
};
