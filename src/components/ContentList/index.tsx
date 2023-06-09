import React, {memo} from 'react';
import {FlatList} from 'react-native';

import {GetContentListResponseType} from '@store/services/tabNews/types';

import {ContentItem} from './ContentItem';
import styles from './styles';
import {Divider} from '../Divider';
import {EmptyScreen} from '../EmptyScreen';

interface ContentListProps {
  data: GetContentListResponseType;
  refresh(): void;
  loading: boolean;
  perPage: number;
  currentPage: number;
}

export const ContentList = memo(
  ({
    data,
    refresh,
    loading,
    perPage,
    currentPage,
  }: ContentListProps) => {
    return (
      <FlatList
        data={data}
        style={styles.flatList}
        contentContainerStyle={styles.container}
        ListFooterComponent={<Divider size={20} />}
        ListEmptyComponent={<EmptyScreen />}
        onRefresh={refresh}
        refreshing={loading}
        renderItem={({item, index}) => (
          <ContentItem
            item={item}
            number={index + 1 + (currentPage - 1) * perPage}
          />
        )}
      />
    );
  },
);
