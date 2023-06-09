import React, {memo} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {ContentType} from '@store/services/tabNews/types';
import {calculeDiffDate} from '@utils';
import {Divider} from 'src/components/Divider';

import styles from './styles';

interface ContentItemProps {
  item: ContentType;
  number: number;
}

export const ContentItem = memo(
  ({item, number}: ContentItemProps) => {
    return (
      <TouchableOpacity style={styles.container} activeOpacity={0.7}>
        <Text style={styles.title}>
          {number}. {item.title}
        </Text>
        <View style={styles.contentArea}>
          <View style={styles.tabcoinsIcon} />
          <Divider size={5} horizontal />
          <Text style={styles.contentText}>{item.tabcoins}</Text>
          <View style={styles.separator} />
          <Icon name="comments" light size={14} />
          <Divider size={5} horizontal />
          <Text style={styles.contentText}>
            {item.children_deep_count}
          </Text>
          <View style={styles.separator} />
          <Text style={styles.contentText}>
            {item.owner_username}
          </Text>
          <View style={styles.separator} />
          <Text style={styles.contentText}>
            {calculeDiffDate(item.published_at)}
          </Text>
        </View>
      </TouchableOpacity>
    );
  },
);
