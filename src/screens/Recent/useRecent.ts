import {useCallback, useEffect, useState} from 'react';

import {
  useGetContentListQuery,
  usePrefetch,
} from '@store/services/tabNews';

export function useRecent() {
  const [page, setPage] = useState<number>(1);
  const perPage = 10;
  const {data, isLoading, error, refetch, isFetching} =
    useGetContentListQuery({
      page: page,
      perPage,
      strategy: 'new',
    });

  const prefetch = usePrefetch('getContentList');

  const prefetchNext = useCallback(() => {
    prefetch({page: page + 1, perPage, strategy: 'new'});
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
  };
}
