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
    width: 30,
    height: 30,
    borderRadius: 15,
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
    width: 50,
    height: 50,
    borderRadius: 25,
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
    width: 30,
    height: 30,
  },
});

export default styles;
