import {StyleSheet} from 'react-native';

import {$COLORS} from '@utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottie: {
    width: '50%',
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
    width: '50%',
    textAlign: 'center',
    color: $COLORS.blackWithOpacity(7),
    marginTop: -20,
  },
  button: {
    padding: 10,
    backgroundColor: $COLORS.green,
    borderRadius: 6,
  },
  buttonText: {
    color: $COLORS.white,
    fontWeight: '600',
  },
});

export default styles;
