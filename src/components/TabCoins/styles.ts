import {StyleSheet} from 'react-native';

import {$COLORS} from '@utils';

const styles = (color = $COLORS.white, weight = 'light') =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    tabcoinsIcon: {
      backgroundColor: $COLORS.link,
      width: 14,
      height: 14,
      borderRadius: 3,
    },
    contentText: {
      fontWeight: weight === 'light' ? '400' : '600',
      fontSize: 16,
      color: color,
    },
  });

export default styles;
