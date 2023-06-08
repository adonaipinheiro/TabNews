import {StyleSheet} from 'react-native';

import {$COLORS} from '@utils';

const styles = (error?: string) =>
  StyleSheet.create({
    container: {
      width: '100%',
    },
    input: {
      backgroundColor: $COLORS.black,
      borderRadius: 6,
      borderColor: error ? $COLORS.redDark300 : $COLORS.grayDark,
      borderWidth: 1,
      width: '100%',
      padding: 10,
      height: 40,
      color: $COLORS.grayLight,
    },
    textError: {
      color: $COLORS.red300,
      fontWeight: 'bold',
      fontSize: 12,
    },
    textContent: {
      marginTop: 5,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    label: {
      marginBottom: 7.5,
      color: $COLORS.grayLight,
      fontWeight: 'bold',
    },
  });

export default styles;
