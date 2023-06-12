import {StyleSheet} from 'react-native';

import {$COLORS} from '@utils';

const markdownStyles = StyleSheet.create({
  body: {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    padding: 10,
  },
});

export {markdownStyles};

export default styles;
