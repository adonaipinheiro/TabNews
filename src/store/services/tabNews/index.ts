import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

import {
  GetContentChildrenRequestType,
  GetContentChildrenResponseType,
  GetContentListRequestType,
  GetContentListResponseType,
  GetContentRequestType,
  GetContentResponseType,
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
    getContent: builder.query<
      GetContentResponseType,
      GetContentRequestType
    >({
      query: ({owner_username, slug}) =>
        `contents/${owner_username}/${slug}`,
    }),
    getContentChildren: builder.query<
      GetContentChildrenResponseType[],
      GetContentChildrenRequestType
    >({
      query: ({owner_username, slug}) =>
        `contents/${owner_username}/${slug}/children`,
    }),
  }),
});

export const {
  useGetContentListQuery,
  useGetContentQuery,
  useGetContentChildrenQuery,
  usePrefetch,
} = tabnewsApi;
