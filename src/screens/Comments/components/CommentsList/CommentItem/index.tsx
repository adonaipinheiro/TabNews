import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {Markdown} from 'react-native-markdown-display';

import {TabCoins} from '@components';
import {GetContentChildrenResponseType} from '@store/services/tabNews/types';
import {$COLORS, calculeDiffDate, markdownStyles} from '@utils';

import styles from './styles';

interface CommentsItemProps {
  item: GetContentChildrenResponseType;
  owner?: string;
}

export function CommentsItem({item, owner}: CommentsItemProps) {
  return (
    <View style={styles.container}>
      <View style={styles.commentHeader}>
        <View style={styles.commentHeaderArea}>
          <View style={styles.commentOwnerNameContainer}>
            <Text style={styles.commentOwnerText}>
              {item.owner_username}
            </Text>
          </View>
          {owner && (
            <>
              <Text style={styles.commentText}> em resposta à </Text>
              <View style={styles.commentOwnerNameContainer}>
                <Text style={styles.commentOwnerText}>{owner}</Text>
              </View>
            </>
          )}
          <Text style={styles.commentText}>
            {' '}
            {calculeDiffDate(item.published_at)}
          </Text>
        </View>
        <TabCoins tabCoins={item.tabcoins} color={$COLORS.gray300} />
      </View>
      <Markdown
        style={{
          ...markdownStyles,
          body: {
            ...markdownStyles.body,
            paddingBottom: 0,
            paddingTop: 0,
          },
        }}>
        {item.body}
      </Markdown>
      <FlatList
        data={item.children}
        scrollEnabled={false}
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
