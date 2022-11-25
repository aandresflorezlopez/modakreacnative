export type Article = {
  id: string;
  title: string;
  image_id: string;
  api_link: string;
  publication_history: string;
  credit_line: string;
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

export type FavoriteArticle = {
  deviceId: string;
  articleId: string;
  title: string;
};
