import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import {
  ContentList,
  ErrorScreen,
  LoadingScreen,
  Pagination,
} from '@components';

import styles from './styles';
import {usePosts} from './usePosts';

interface PostsProps {
  strategy: 'relevant' | 'old' | 'new';
}

export function Posts({strategy}: PostsProps) {
  const {
    prevPage,
    data,
    error,
    isFetching,
    isLoading,
    nextPage,
    onRefresh,
    refetch,
    perPage,
    page,
    scrollRef,
  } = usePosts(strategy);

  return (
    <SafeAreaView
      edges={['bottom', 'left', 'right']}
      style={styles.container}>
      {(isLoading || isFetching) && <LoadingScreen />}
      {!(isLoading || isFetching) && error && (
        <ErrorScreen retry={refetch} />
      )}
      {data && !error && !(isLoading || isFetching) && (
        <ContentList
          data={data}
          scrollRef={scrollRef}
          currentPage={page}
          perPage={perPage}
          refresh={onRefresh}
          loading={isLoading}
        />
      )}
      <Pagination
        currentPage={page}
        onPressNext={nextPage}
        onPressPrev={prevPage}
      />
    </SafeAreaView>
  );
}
