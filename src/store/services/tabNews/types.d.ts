export type ContentListType = {
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

export type GetContentListResponseType = ContentListType[];

export type GetContentRequestType = {
  owner_username: string;
  slug: string;
};

export type GetContentResponseType = {
  body: string;
  title: string;
};

export type GetContentChildrenRequestType = {
  owner_username: string;
  slug: string;
};

export type GetContentChildrenResponseType = {
  body: string;
  title: string;
  owner_username: string;
  published_at: string;
  tabcoins: number;
  children: GetContentChildrenResponseType[];
};
