import {StyleSheet} from 'react-native';

import {$COLORS} from '@utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: $COLORS.white,
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
});

export default styles;
