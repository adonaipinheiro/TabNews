import React from 'react';
import {SafeAreaView} from 'react-native';

import {
  ContentList,
  ErrorScreen,
  LoadingScreen,
  Pagination,
} from '@components';
import {usePosts} from '@hooks';

import styles from './styles';

export function Relevant() {
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
  } = usePosts('relevant');

  return (
    <SafeAreaView style={styles.container}>
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
