import React from 'react';
import {SafeAreaView} from 'react-native';

import {
  ContentList,
  ErrorScreen,
  LoadingScreen,
  Pagination,
} from '@components';

import styles from './styles';
import {useRecent} from './useRecent';

export function Recent() {
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
  } = useRecent();

  return (
    <SafeAreaView style={styles.container}>
      {(isLoading || isFetching) && <LoadingScreen />}
      {!(isLoading || isFetching) && error && (
        <ErrorScreen retry={refetch} />
      )}
      {data && !error && !(isLoading || isFetching) && (
        <ContentList
          data={data}
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
