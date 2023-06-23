import React from 'react';
import {FlatList} from 'react-native';

import {GetContentChildrenResponseType} from '@store/services/tabNews/types';

import {CommentsItem} from './CommentItem';

interface CommentsListProps {
  data: GetContentChildrenResponseType[];
}

export function CommentsList({data}: CommentsListProps) {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => <CommentsItem item={item} />}
    />
  );
}
