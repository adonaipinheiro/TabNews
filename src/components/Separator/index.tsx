import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';

import {$COLORS} from '@utils';

export const Separator = memo(() => {
  return <View style={styles.container} />;
});

const styles = StyleSheet.create({
  container: {
    height: 1,
    width: '100%',
    marginVertical: 10,
    backgroundColor: $COLORS.grayDark,
  },
});
