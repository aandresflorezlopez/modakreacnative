export type Article = {
  id: string;
  title: string;
  smallDescription: string;
  description: string;
  image_id: string;
};

type Pagination = {
  total: number;
  limit: number;
  offset: number;
  total_pages: number;
  current_page: number;
  next_url: string;
};

export type Articles = {
  pagination: Pagination;
  data: Article[];
};

export type ArticleResponse = {
  data: Article;
};
