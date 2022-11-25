import { useEffect, useState } from 'react';
import { Text } from 'react-native';

import List from '../../src/containers/list';

import Loader from '../ui-components/loader';

import { Article } from '../dtos/article.dto';
import FavoriteArticles from '../services/favorite.articles.service';

import app from '../lib/app';

const FavoriteArticleList = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isFetchingData, setFetchingState] = useState<boolean>(true);

  useEffect(() => {
    const fetchArticles = async () => {
      const deviceId = app.uniqueIdentifier;
      const articles = await FavoriteArticles.getAll(deviceId);
      setFetchingState(false);
      setArticles(articles.data);
    };
    isFetchingData && fetchArticles();
  }, [isFetchingData]);

  if (isFetchingData) {
    return <Loader />;
  }

  return <List items={articles} />;
};

export default FavoriteArticleList;
