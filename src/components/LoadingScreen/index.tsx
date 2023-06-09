import Lottie from 'lottie-react-native';
import React, {memo} from 'react';
import {Text, View} from 'react-native';

import {lotties} from '@assets';

import styles from './styles';
import {useLoadingScreen} from './useLoadingScreen';

export const LoadingScreen = memo(() => {
  const {phrase} = useLoadingScreen();

  return (
    <View style={styles.container}>
      <Lottie
        source={lotties.loading}
        speed={1}
        style={styles.lottie}
        autoPlay
        loop
      />
      <Text style={styles.text}>
        Carregando {'\n'}
        {phrase}
      </Text>
    </View>
  );
});
