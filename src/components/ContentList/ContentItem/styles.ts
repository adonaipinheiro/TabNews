import {StyleSheet} from 'react-native';

import {$COLORS} from '@utils';

const styles = StyleSheet.create({
  container: {
    backgroundColor: $COLORS.white,
    borderWidth: 1,
    borderColor: $COLORS.blackWithOpacity(1),
    borderRadius: 6,
    padding: 10,
    shadowColor: $COLORS.blackWithOpacity(9),
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.41,
    elevation: 1,
  },
  title: {
    color: $COLORS.text,
    fontWeight: '600',
    fontSize: 15,
  },
  contentArea: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 5,
  },
  tabcoinsIcon: {
    backgroundColor: $COLORS.link,
    width: 14,
    height: 14,
    borderRadius: 3,
  },
  contentText: {
    fontWeight: '500',
    fontSize: 14,
    color: $COLORS.blackWithOpacity(9),
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
