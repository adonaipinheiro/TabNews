import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';

import {
  ContentList,
  ErrorScreen,
  LoadingScreen,
  Pagination,
} from '@components';
import {useGetContentListQuery} from '@store/services/tabNews';

import styles from './styles';

export function TabNews() {
  const [page, setPage] = useState<number>(1);
  const perPage = 10;
  const {data, isLoading, error, refetch, isFetching} =
    useGetContentListQuery({
      page: page,
      perPage,
      strategy: 'relevant',
    });

  function onRefresh() {
    setPage(1);
    refetch();
  }

  function nextPage() {
    setPage(page + 1);
    refetch();
  }

  function PrevPage() {
    setPage(page - 1);
    refetch();
  }

  return (
    <SafeAreaView style={styles.container}>
      {(isLoading || isFetching) && <LoadingScreen />}
      {error && <ErrorScreen retry={refetch} />}
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
        onPressPrev={PrevPage}
      />
    </SafeAreaView>
  );
}
