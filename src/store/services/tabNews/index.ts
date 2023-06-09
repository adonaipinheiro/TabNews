import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

import {
  GetContentListRequestType,
  GetContentListResponseType,
} from './types';

export const tabnewsApi = createApi({
  reducerPath: 'tabnewsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.tabnews.com.br/api/v1',
  }),
  endpoints: builder => ({
    getContentList: builder.query<
      GetContentListResponseType,
      GetContentListRequestType
    >({
      query: ({page, perPage, strategy}) =>
        `/contents?page=${page}&per_page=${perPage}&strategy=${strategy}`,
    }),
  }),
});

export const {useGetContentListQuery} = tabnewsApi;
