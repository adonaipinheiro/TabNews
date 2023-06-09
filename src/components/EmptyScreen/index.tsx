import Lottie from 'lottie-react-native';
import React, {memo} from 'react';
import {Text, View} from 'react-native';

import {lotties} from '@assets';

import styles from './styles';

export const EmptyScreen = memo(() => {
  return (
    <View style={styles.container}>
      <Lottie
        source={lotties.empty}
        speed={1}
        resizeMode="center"
        style={styles.lottie}
        autoPlay
        loop
      />
      <Text style={styles.text}>Um erro inesperado aconteceu</Text>
    </View>
  );
});
