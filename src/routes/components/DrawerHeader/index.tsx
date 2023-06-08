import React, {memo} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import {images} from '@assets';
import {Divider} from '@components';
import {$COLORS} from '@utils';

export const DrawerHeader = memo(() => {
  return (
    <View style={styles.container}>
      <Image source={images.logo} style={styles.img} />
      <Divider size={10} horizontal />
      <Text style={styles.title}>TabNews</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: $COLORS.white,
  },
  img: {
    width: 32,
    height: 32,
  },
});
