import {StyleSheet} from 'react-native';

import {$COLORS} from '@utils';

const styles = (loading = false) =>
  StyleSheet.create({
    container: {
      backgroundColor: loading ? $COLORS.greenDark : $COLORS.green,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      height: 40,
      padding: 10,
      borderRadius: 6,
    },
    text: {
      color: $COLORS.white,
      fontSize: 14,
      fontWeight: '600',
    },
  });

export default styles;
