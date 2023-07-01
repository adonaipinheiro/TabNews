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
  postTopArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  postTopText: {
    color: $COLORS.gray300,
    fontWeight: '600',
  },
});

export default styles;
