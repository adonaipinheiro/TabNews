import {StyleSheet} from 'react-native';

import {$COLORS} from '@utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottie: {
    width: '30%',
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
    width: '50%',
    textAlign: 'center',
    color: $COLORS.blackWithOpacity(7),
  },
});

export default styles;
