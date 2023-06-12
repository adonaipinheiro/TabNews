import React, {memo} from 'react';
import {View} from 'react-native';

import styles from './styles';
import type {DividerProps} from './types';

export const Divider = memo(({size, horizontal}: DividerProps) => {
  return <View style={styles(size, horizontal).container} />;
});
