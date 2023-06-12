import React, {memo} from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {Divider} from '@components';
import {$COLORS} from '@utils';

import styles from './styles';

interface HeaderRightProps {
  color: string | undefined;
  tabCoins: number;
  childrenDeepCount: number;
}

export const HeaderRight = memo(
  ({childrenDeepCount, color, tabCoins}: HeaderRightProps) => {
    return (
      <View style={styles.contentArea}>
        <View style={styles.tabcoinsIcon} />
        <Divider size={5} horizontal />
        <Text style={styles.contentText}>{tabCoins}</Text>
        <View style={styles.separator} />
        <Icon
          name="comments"
          light
          size={14}
          color={color || $COLORS.white}
        />
        <Divider size={5} horizontal />
        <Text style={styles.contentText}>{childrenDeepCount}</Text>
        <View style={styles.separator} />
      </View>
    );
  },
);

export function renderHeaderRight({
  childrenDeepCount,
  color,
  tabCoins,
}: HeaderRightProps) {
  return (
    <HeaderRight
      childrenDeepCount={childrenDeepCount}
      color={color}
      tabCoins={tabCoins}
    />
  );
}
