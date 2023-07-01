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
  postOwnerNameContainer: {
    backgroundColor: $COLORS.blueLight300,
    padding: 5,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  postOwnerText: {
    color: $COLORS.link,
  },
});

export default styles;
