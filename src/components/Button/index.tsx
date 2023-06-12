import React, {memo} from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './styles';
import type {ButtonProps} from './types';

export const Button = memo(
  ({text, loading = false, ...props}: ButtonProps) => {
    return (
      <TouchableOpacity
        style={styles(loading).container}
        {...props}
        disabled={loading}
        activeOpacity={0.7}>
        <Text style={styles().text}>
          {loading ? 'Carregando' : text}
        </Text>
      </TouchableOpacity>
    );
  },
);
