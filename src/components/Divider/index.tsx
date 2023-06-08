import React from 'react';
import {View} from 'react-native';

import styles from './styles';
import type {DividerProps} from './types';

export function Divider({size, horizontal}: DividerProps) {
  return <View style={styles(size, horizontal).container} />;
}
