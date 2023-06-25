import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {Markdown} from 'react-native-markdown-display';

import {GetContentChildrenResponseType} from '@store/services/tabNews/types';
import {calculeDiffDate, markdownStyles} from '@utils';

import styles from './styles';

interface CommentsItemProps {
  item: GetContentChildrenResponseType;
  owner?: string;
}

export function CommentsItem({item, owner}: CommentsItemProps) {
  return (
    <View style={styles.container}>
      <View style={styles.commentHeader}>
        <View style={styles.commentOwnerNameContainer}>
          <Text style={styles.commentOwnerText}>
            {item.owner_username}
          </Text>
        </View>
        {owner && (
          <>
            <Text> em resposta à </Text>
            <View style={styles.commentOwnerNameContainer}>
              <Text style={styles.commentOwnerText}>{owner}</Text>
            </View>
          </>
        )}
        <Text> {calculeDiffDate(item.published_at)}</Text>
      </View>
      <Markdown
        style={{
          ...markdownStyles,
          body: {
            ...markdownStyles.body,
            paddingBottom: 10,
          },
        }}>
        {item.body}
      </Markdown>
      <FlatList
        data={item.children}
        contentContainerStyle={styles.flatListContentChild}
        renderItem={child => (
          <CommentsItem
            item={child.item}
            owner={item.owner_username}
          />
        )}
      />
    </View>
  );
}
