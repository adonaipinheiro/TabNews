import React, {memo} from 'react';
import {Text, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {$COLORS} from '@utils';

import styles from './styles';
import type {InputProps} from './types';
import {Divider} from '../Divider';

export const Input = memo(({error, label, ...props}: InputProps) => {
  return (
    <View style={styles(error).container}>
      <Text style={styles().label}>{label}</Text>
      <TextInput
        style={styles(error).input}
        {...props}
        placeholderTextColor={$COLORS.grayDark}
      />
      {error && (
        <View style={styles().textContent}>
          <Icon
            name="exclamation-triangle"
            size={12}
            color={$COLORS.red300}
          />
          <Divider size={5} horizontal />
          <Text style={styles().textError}>{error}</Text>
        </View>
      )}
    </View>
  );
});
