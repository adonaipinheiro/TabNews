import {getDefaultHeaderHeight} from '@react-navigation/elements';
import {formatDistance} from 'date-fns';
import {Dimensions, Platform, StyleSheet} from 'react-native';

import {$COLORS} from './colors';

export function getHeaderHeight() {
  return getDefaultHeaderHeight(
    {
      height: Dimensions.get('screen').height,
      width: Dimensions.get('screen').width,
    },
    false,
    Platform.OS === 'android' ? 0 : 44,
  );
}

export function calculeDiffDate(dateParam: string) {
  const date = new Date(dateParam);
  const dateNow = new Date();

  return (
    formatDistance(date, dateNow, {
      addSuffix: false,
      locale: require('date-fns/locale/pt-BR'),
    }) + ' atrás'
  );
}

export const markdownStyles = StyleSheet.create({
  body: {
    paddingTop: 16,
    paddingBottom: 80,
  },
  heading1: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 10,
    color: $COLORS.primary,
  },
  heading2: {
    fontSize: 24,
    fontWeight: '600',
    borderBottomWidth: 1,
    borderBottomColor: $COLORS.grayDark,
    marginBottom: 10,
    marginTop: 20,
  },
  heading3: {
    fontSize: 18,
    fontWeight: '600',
  },
  heading4: {
    fontSize: 16,
  },
  heading5: {
    fontSize: 14,
  },
  heading6: {
    fontSize: 12,
  },
  text: {
    color: $COLORS.primary,
  },
  image: {
    borderRadius: 6,
  },
  code_inline: {
    color: $COLORS.grayLight,
    backgroundColor: $COLORS.primary,
    borderRadius: 6,
  },
  code_block: {
    color: $COLORS.grayLight,
    backgroundColor: $COLORS.primary,
    borderRadius: 6,
  },
  fence: {
    color: $COLORS.grayLight,
    backgroundColor: $COLORS.primary,
    borderRadius: 6,
  },
  paragraph: {
    fontSize: 18,
  },
  list_item: {
    marginVertical: 10,
    fontSize: 16,
  },
  link: {
    color: $COLORS.link,
  },
  blocklink: {
    color: $COLORS.link,
  },
});
