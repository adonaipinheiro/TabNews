import React, {memo} from 'react';
import {Text, View} from 'react-native';

import styles from './styles';
import {Divider} from '../Divider';

interface TabCoinsProps {
  tabCoins: number;
  color?: string;
  weight?: 'light' | 'bold';
}

export const TabCoins = memo(
  ({tabCoins, color, weight}: TabCoinsProps) => {
    return (
      <View style={styles().container}>
        <View style={styles().tabcoinsIcon} />
        <Divider size={5} horizontal />
        <Text style={styles(color, weight).contentText}>
          {tabCoins}
        </Text>
      </View>
    );
  },
);
