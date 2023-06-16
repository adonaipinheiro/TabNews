/* eslint-disable import/default */
import React, {memo, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Animated, {
  Easing,
  ZoomInEasyDown,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {Divider} from '@components';
import {$COLORS} from '@utils';

import styles from './styles';

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
