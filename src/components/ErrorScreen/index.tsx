import Lottie from 'lottie-react-native';
import React, {memo} from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {lotties} from '@assets';

import styles from './styles';
import {Divider} from '../Divider';

interface ErrorScreenProps {
  retry(): void;
}

export const ErrorScreen = memo(({retry}: ErrorScreenProps) => {
  return (
    <View style={styles.container}>
      <Lottie
        source={lotties.error}
        speed={1}
        style={styles.lottie}
        autoPlay
        loop
      />
      <Divider size={10} />
      <Text style={styles.text}>Um erro inesperado aconteceu</Text>
      <Divider size={10} />
      <TouchableOpacity style={styles.button} onPress={retry}>
        <Text style={styles.buttonText}>Tente novamente</Text>
      </TouchableOpacity>
    </View>
  );
});
