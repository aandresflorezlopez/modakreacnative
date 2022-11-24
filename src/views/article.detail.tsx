import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { ScrollView, SafeAreaView } from 'react-native';
import { RouteProp } from '@react-navigation/native';

import {
  ListItem,
  Avatar,
  Text,
  VStack,
  Stack,
  Button
} from '@react-native-material/core';

// components
import Loader from '../ui-components/loader';

// services
import ArticlesService from '../../src/services/articles.service';
import FavoriteArticles from '../../src/services/favorite.articles.service';

import { ArticleResponse } from '../../src/dtos/item.dto';

import app from '../lib/app';

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

const ArticleDetail = ({}) => {
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

  const renderFavoriteButtton = () => {
    return (
      <Stack fill center spacing={4}>
        <Button
          style={{ marginVertical: 40 }}
          title="Add me, please! Fav"
          onPress={addItem}
        />
      </Stack>
    );
  };

  if (article && article.data) {
    const image = `https://www.artic.edu/iiif/2/${article.data.image_id}/full/843,/0/default.jpg`;
    return (
      <SafeAreaView>
        <VStack m={4} spacing={2}>
          <ScrollView
            style={{
              paddingTop: 10,
              backgroundColor: 'white',
              paddingBottom: 50,
              paddingHorizontal: 20
            }}
          >
            <Text variant="h3">{article.data.title}</Text>
            <ListItem
              title={`Credit line: ${article.data.title}`}
              secondaryText={`See more: ${article.data.title}`}
            />
            {/* Image */}
            <Text variant="body1">
              {article.data.publication_history.slice(0, 1000)} ...
            </Text>
            {renderFavoriteButtton()}
          </ScrollView>
        </VStack>
      </SafeAreaView>
    );
  }
};

export default ArticleDetail;
