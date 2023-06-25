import React from 'react';
import {FlatList, StyleSheet} from 'react-native';

import {EmptyScreen} from '@components';
import {GetContentChildrenResponseType} from '@store/services/tabNews/types';

import {CommentsItem} from './CommentItem';

interface CommentsListProps {
  data: GetContentChildrenResponseType[];
}

export function CommentsList({data}: CommentsListProps) {
  return (
    <FlatList
      data={data}
      ListEmptyComponent={
        <EmptyScreen text="Essa publicação ainda não possui comentários" />
      }
      contentContainerStyle={styles.content}
      renderItem={({item}) => <CommentsItem item={item} />}
    />
  );
}

const styles = StyleSheet.create({
  content: {
    gap: 0,
  },
});
