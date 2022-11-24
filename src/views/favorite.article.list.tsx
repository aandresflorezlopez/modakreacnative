import { useEffect, useState } from 'react';
import { Text } from 'react-native';

import List from '../../src/containers/list';

import Loader from '../ui-components/loader';

import ArticlesService from '../../src/services/articles.service';
import { Article as ArticleDto, ArticleResponse } from '../../src/dtos/item.dto';

const FavoriteArticleList = () => {
  // const [articles, setArticles] = useState<ArticleDto[]>([]);
  // const [isFetchingData, setFetchingState] = useState<boolean>(true);

  // useEffect(() => {
  //   const fetchArticles = async () => {
  //     const articles = await ArticlesService.getAll();
  //     setFetchingState(false);
  //     setArticles(articles.data);
  //   };
  //   isFetchingData && fetchArticles();
  // }, [isFetchingData]);

  // if (isFetchingData) {
  return <Loader />;
  // }

  // return <List items={articles} />;
};

export default FavoriteArticleList;
