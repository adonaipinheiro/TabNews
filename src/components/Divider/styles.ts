import {StyleSheet} from 'react-native';

const styles = (size: number, horizontal = false) =>
  StyleSheet.create({
    container: {
      width: horizontal ? size : 0,
      height: horizontal ? 0 : size,
    },
  });

export default styles;
