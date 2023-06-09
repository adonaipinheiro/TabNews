import {Platform, StyleSheet} from 'react-native';

import {$COLORS} from '@utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  scrollView: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: $COLORS.primary,
    paddingTop: Platform.OS === 'ios' ? 44 : 0,
    padding: 10,
  },
  headerContent: {
    padding: 10,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconArea: {
    padding: 10,
    backgroundColor: $COLORS.grayDark,
    borderRadius: 6,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInUpText: {
    fontSize: 14,
    fontWeight: '600',
    color: $COLORS.headerText,
  },
});

export default styles;
