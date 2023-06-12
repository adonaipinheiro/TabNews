import {StyleSheet} from 'react-native';

import {$COLORS} from '@utils';

const styles = StyleSheet.create({
  contentArea: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  tabcoinsIcon: {
    backgroundColor: $COLORS.link,
    width: 14,
    height: 14,
    borderRadius: 3,
  },
  contentText: {
    fontWeight: '600',
    fontSize: 16,
    color: $COLORS.white,
  },
  separator: {
    marginHorizontal: 5,
    width: 2,
    height: 2,
    borderRadius: 1,
    backgroundColor: $COLORS.text,
  },
});

export default styles;
