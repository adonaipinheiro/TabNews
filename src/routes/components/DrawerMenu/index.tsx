import {
  DrawerContentComponentProps,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {Divider} from '@components';
import {StackNavigationProps} from '@routes';
import {$COLORS} from '@utils';

import styles from './styles';

export const DrawerMenu = (props: DrawerContentComponentProps) => {
  const {navigate} = useNavigation<StackNavigationProps>();

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
