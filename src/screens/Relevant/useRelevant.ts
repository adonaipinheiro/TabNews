import {useCallback, useEffect, useRef, useState} from 'react';
import {FlatList} from 'react-native';

import {
  useGetContentListQuery,
  usePrefetch,
} from '@store/services/tabNews';

export function useRelevant() {
  const [page, setPage] = useState<number>(1);
  const perPage = 10;
  const {data, isLoading, error, refetch, isFetching} =
    useGetContentListQuery({
      page: page,
      perPage,
      strategy: 'relevant',
    });
  const scrollRef = useRef<FlatList>(null);

  const prefetch = usePrefetch('getContentList');

  const prefetchNext = useCallback(() => {
    prefetch({page: page + 1, perPage, strategy: 'relevant'});
  }, [prefetch, page]);

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
