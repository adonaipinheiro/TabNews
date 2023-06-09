import {
  DrawerContentComponentProps,
  DrawerItem,
  DrawerItemList,
  DrawerNavigationOptions,
} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {Divider} from '@components';
import {StackNavigationProps} from '@routes';
import {$COLORS} from '@utils';

import styles from './styles';

const renderIcon = (name: string, color: string) => (
  <Icon
    name={name}
    color={color}
    size={14}
    light
    style={{width: 30}}
  />
);

export const DrawerMenu = (props: DrawerContentComponentProps) => {
  const {navigate} = useNavigation<StackNavigationProps>();

  const screenOptions: DrawerNavigationOptions = {
    drawerLabelStyle: {
      fontWeight: '600',
      fontSize: 14,
      marginLeft: -20,
    },
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <SafeAreaView style={styles.headerContent}>
          <View style={styles.iconArea}>
            <Icon solid name="user" size={24} color={$COLORS.black} />
          </View>
          <Divider size={14} />
          <Text
            onPress={() => navigate('SignIn')}
            style={styles.signInUpText}>
            Entrar/Cadastrar
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
            navigate('Institutional', {
              title: 'Contato',
              url: 'https://www.tabnews.com.br/contato',
            });
          }}
          {...props}
        />
        <DrawerItem
          labelStyle={screenOptions.drawerLabelStyle}
          label={'Museu'}
          icon={({color}) => renderIcon('history', color)}
          onPress={() => {
            navigate('Institutional', {
              title: 'Museu',
              url: 'https://www.tabnews.com.br/museu',
            });
          }}
          {...props}
        />
        <DrawerItem
          labelStyle={screenOptions.drawerLabelStyle}
          label={'Sobre'}
          icon={({color}) => renderIcon('address-book', color)}
          onPress={() => {
            navigate('Institutional', {
              title: 'Sobre',
              url: 'https://www.tabnews.com.br/filipedeschamps/tentando-construir-um-pedaco-de-internet-mais-massa',
            });
          }}
          {...props}
        />
        <DrawerItem
          labelStyle={screenOptions.drawerLabelStyle}
          label={'Status'}
          icon={({color}) => renderIcon('chart-bar', color)}
          onPress={() => {
            navigate('Institutional', {
              title: 'Status',
              url: 'https://www.tabnews.com.br/status',
            });
          }}
          {...props}
        />
        <DrawerItem
          labelStyle={screenOptions.drawerLabelStyle}
          label={'Termos de uso'}
          icon={({color}) => renderIcon('file-alt', color)}
          onPress={() => {
            navigate('Institutional', {
              title: 'Termos de uso',
              url: 'https://www.tabnews.com.br/termos-de-uso',
            });
          }}
          {...props}
        />
      </ScrollView>
      <SafeAreaView>
        <DrawerItem
          pressColor={$COLORS.pink}
          inactiveTintColor={$COLORS.red}
          label={'Deslogar'}
          onPress={() => {}}
        />
      </SafeAreaView>
    </View>
  );
};
