import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import { RouteProp } from '@react-navigation/native';

// components
import Loader from '../ui-components/loader';

// services
import ArticlesService from '../../src/services/articles.service';
import FavoriteArticles from '../../src/services/favorite.articles.service';

import { ArticleResponse } from '../../src/dtos/item.dto';

import app from '../lib/app';

type ArticleDetailProps = {
  favorite: boolean;
};

type ParamList = {
  Detail: {
    articleId: number;
  };
};

export type FavoriteArticle = {
  deviceId: string;
  articleId: string;
  title: string;
};

const ArticleDetail = ({ favorite }: ArticleDetailProps) => {
  const [article, setArticle] = useState<ArticleResponse>();
  const [isFetchingData, setFetchingState] = useState<boolean>(true);

  const route = useRoute<RouteProp<ParamList, 'Detail'>>();

  useEffect(() => {
    const fetchArticles = async () => {
      const articleId = route.params && route.params.articleId;
      const article = await ArticlesService.findOneById(articleId);
      setFetchingState(false);
      setArticle(article);
    };
    isFetchingData && fetchArticles();
  }, [isFetchingData]);

  if (isFetchingData) {
    return <Loader />;
  }

  const addItem = (): void => {
    const deviceId = app.uniqueIdentifier;

    const favoriteArticle = {
      deviceId,
      articleId: article.data.id,
      title: article.data.title
    } as FavoriteArticle;

    FavoriteArticles.addOne(favoriteArticle);
  };

  const removeItem = () => {};

  const renderFavoriteButtton = () => {
    const { data } = article;
    if (favorite) {
      return (
        <Button
          onPress={removeItem}
          title="Remove me, sure?"
          color="#841584"
          accessibilityLabel="Remove me, sure?"
        />
      );
    }
    return (
      <Button
        onPress={addItem}
        title="Add me, please!"
        color="#841584"
        accessibilityLabel="Add me, please!"
      />
    );
  };

  if (article && article.data) {
    return (
      <View>
        <Text>Detail: --- {article.data.title}</Text>
        {renderFavoriteButtton()}
      </View>
    );
  }
};

export default ArticleDetail;
