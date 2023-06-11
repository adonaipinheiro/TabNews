import {useState} from 'react';

import {useGetContentListQuery} from '@store/services/tabNews';

export function useRelevant() {
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

  function prevPage() {
    setPage(page - 1);
    refetch();
  }

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
