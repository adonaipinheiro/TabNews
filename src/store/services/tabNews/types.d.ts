export type ContentType = {
  id: string;
  owner_id: string;
  parent_id: string | null;
  slug: string;
  title: string;
  status: string;
  source_url: string;
  created_at: string;
  updated_at: string;
  published_at: string;
  deleted_at: string | null;
  tabcoins: number;
  owner_username: string;
  children_deep_count: number;
};

export type GetContentListRequestType = {
  page: number;
  perPage: number;
  strategy: 'relevant' | 'old' | 'new';
};

export type GetContentListResponseType = ContentType[];
