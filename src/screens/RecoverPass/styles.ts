import {StyleSheet} from 'react-native';

import {$COLORS, getHeaderHeight} from '@utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: $COLORS.primary,
    padding: 40,
    marginTop: -getHeaderHeight(),
  },
  img: {
    width: 100,
    height: 100,
  },
  title: {
    color: $COLORS.headerText,
    fontSize: 24,
    fontWeight: '600',
  },
  subTitle: {
    color: $COLORS.headerText,
    fontSize: 20,
    fontWeight: '600',
    alignSelf: 'flex-start',
  },
  text: {
    color: $COLORS.grayLight,
    fontSize: 14,
    fontWeight: '500',
  },
  textLink: {
    color: $COLORS.link,
  },
});

export default styles;
