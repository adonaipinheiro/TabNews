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
    marginBottom: 10,
  },
  commentHeader: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  commentHeaderArea: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
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
  commentText: {
    color: $COLORS.gray300,
  },
});

export default styles;
