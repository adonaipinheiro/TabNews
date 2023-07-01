import {StyleSheet} from 'react-native';

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
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
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
    fontSize: 18,
    fontWeight: '600',
    color: $COLORS.headerText,
  },
  icon: {
    width: 30,
  },
  versionArea: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: 10,
  },
  versionText: {
    color: $COLORS.blackWithOpacity(6),
    fontSize: 12,
  },
});

export default styles;
