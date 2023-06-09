import {StyleSheet} from 'react-native';

import {$COLORS} from '@utils';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 10,
  },
  prevAndNextPage: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: $COLORS.grayDark,
    justifyContent: 'center',
    alignItems: 'center',
  },
  prevAndNextPageText: {
    fontSize: 12,
    fontWeight: '600',
    color: $COLORS.primary,
  },
  currentPage: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: $COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  currentPageText: {
    fontSize: 16,
    fontWeight: '600',
    color: $COLORS.headerText,
  },
  emptyPrev: {
    width: 44,
    height: 44,
  },
});

export default styles;
