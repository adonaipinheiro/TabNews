import {StyleSheet} from 'react-native';

import {$COLORS} from '@utils';

const styles = StyleSheet.create({
  container: {
    backgroundColor: $COLORS.white,
    borderWidth: 1,
    borderColor: $COLORS.offWhite,
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
  commentHeader: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  commentOwnerNameContainer: {
    backgroundColor: $COLORS.blueLight300,
    padding: 5,
    borderRadius: 8,
  },
  commentOwnerText: {
    color: $COLORS.link,
  },
  flatListContentChild: {
    gap: 10,
  },
});

export default styles;
