/* eslint-disable import/default */
import React, {memo, useState} from 'react';
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated, {
  Easing,
  ZoomInEasyDown,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {Divider} from '@components';
import {$COLORS} from '@utils';

interface FABProps {
  onLike(): void;
  onUnlike(): void;
  onComments(): void;
}

export const FAB = memo(
  ({onLike, onUnlike, onComments}: FABProps) => {
    const [isOpen, setOpen] = useState<boolean>(false);

    function handleOpen() {
      setOpen(!isOpen);
    }

    return (
      <View style={styles.container}>
        {isOpen && (
          <>
            <Animated.View
              entering={ZoomInEasyDown.duration(300)
                .easing(Easing.bounce)
                .delay(400)}>
              <TouchableOpacity
                onPress={onLike}
                activeOpacity={0.7}
                style={[styles.fabButtons, styles.fabButtonLike]}>
                <Icon
                  name="thumbs-up"
                  light
                  color={$COLORS.white}
                  size={18}
                />
              </TouchableOpacity>
            </Animated.View>

            <Divider size={20} />

            <Animated.View
              entering={ZoomInEasyDown.duration(300)
                .easing(Easing.bounce)
                .delay(200)}>
              <TouchableOpacity
                onPress={onUnlike}
                activeOpacity={0.7}
                style={[styles.fabButtons, styles.fabButtonUnlike]}>
                <Icon
                  name="thumbs-down"
                  light
                  color={$COLORS.white}
                  size={18}
                />
              </TouchableOpacity>
            </Animated.View>

            <Divider size={20} />

            <Animated.View
              entering={ZoomInEasyDown.duration(300)
                .easing(Easing.bounce)
                .delay(100)}>
              <TouchableOpacity
                onPress={onComments}
                activeOpacity={0.7}
                style={styles.fabButtons}>
                <Icon
                  name="comments"
                  light
                  color={$COLORS.white}
                  size={18}
                />
              </TouchableOpacity>
            </Animated.View>
            <Divider size={32} />
          </>
        )}
        <TouchableOpacity
          onPress={handleOpen}
          activeOpacity={0.7}
          style={styles.fabMainButton}>
          <Icon name="plus" light color={$COLORS.white} size={24} />
        </TouchableOpacity>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: Platform.OS === 'android' ? 20 : 44,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fabButtons: {
    backgroundColor: $COLORS.primary,
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fabButtonLike: {
    backgroundColor: $COLORS.green,
  },
  fabButtonUnlike: {
    backgroundColor: $COLORS.red300,
  },
  fabMainButton: {
    backgroundColor: $COLORS.primary,
    borderWidth: 1,
    height: 56,
    width: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: $COLORS.gray300,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.9,
    shadowRadius: 1.41,
    elevation: 5,
  },
});
