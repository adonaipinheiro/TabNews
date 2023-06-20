import {useCallback, useEffect, useRef, useState} from 'react';
import {FlatList} from 'react-native';

import {
  useGetContentListQuery,
  usePrefetch,
} from '@store/services/tabNews';

import {useRemoteConfig} from './useRemoteConfig';

type strategyTypes = 'relevant' | 'old' | 'new';

export function usePosts(strategy: strategyTypes) {
  const {getNumber} = useRemoteConfig();
  const [page, setPage] = useState<number>(1);
  const perPage = getNumber('perPage');
  const {data, isLoading, error, refetch, isFetching} =
    useGetContentListQuery({
      page: page,
      perPage,
      strategy,
    });
  const scrollRef = useRef<FlatList>(null);

  const prefetch = usePrefetch('getContentList');

  const prefetchNext = useCallback(() => {
    prefetch({page: page + 1, perPage, strategy});
  }, [prefetch, page, perPage, strategy]);

  function onRefresh() {
    setPage(1);
    refetch();
  }

  function nextPage() {
    setPage(page + 1);
    refetch();
  }

  function prevPage() {
    setPage(page - 1);
    refetch();
  }

  useEffect(() => {
    prefetchNext();
    scrollRef.current?.scrollToOffset({animated: true, offset: 0});
  }, [page, prefetchNext]);

  return {
    data,
    isLoading,
    error,
    onRefresh,
    nextPage,
    prevPage,
    isFetching,
    page,
    perPage,
    refetch,
    scrollRef,
  };
}
