import {Platform, StyleSheet} from 'react-native';

import {$COLORS} from '@utils';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: Platform.OS === 'android' ? 20 : 44,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fabButtons: {
    backgroundColor: $COLORS.primary,
    height: 44,
    width: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fabButtonLike: {
    backgroundColor: $COLORS.green,
  },
  fabButtonUnlike: {
    backgroundColor: $COLORS.red300,
  },
  fabMainButton: {
    backgroundColor: $COLORS.primary,
    borderWidth: 1,
    height: 56,
    width: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: $COLORS.gray300,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.9,
    shadowRadius: 1.41,
    elevation: 5,
  },
});

export default styles;
