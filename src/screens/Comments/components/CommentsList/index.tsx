import React from 'react';
import {FlatList} from 'react-native';

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
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={
        <EmptyScreen text="Essa publicação ainda não possui comentários" />
      }
      renderItem={({item}) => <CommentsItem item={item} />}
    />
  );
}
