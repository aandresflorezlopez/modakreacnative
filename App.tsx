import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import List from './src/containers/list';

import bootLoaders from './src/boot-loaders';
import app from './src/lib/app';
import { Article as ArticleDto, ArticleResponse } from './src/dtos/item.dto';

import ArticlesService from './src/services/articles.service';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useRoute } from '@react-navigation/native';

const Articles = () => {
  const [articles, setArticles] = useState<ArticleDto[]>([]);
  const [isFetchingData, setFetchingState] = useState<boolean>(true);
  const [isBooting, setBootState] = useState<boolean>(true);

  useEffect(() => {
    bootLoaders.forEach((loader) => {
      loader().boot(app);
      setBootState(false);
    });
  }, [isBooting]);

  useEffect(() => {
    const fetchArticles = async () => {
      const articles = await ArticlesService.getAll();
      setFetchingState(false);
      setArticles(articles.data);
    };
    isFetchingData && fetchArticles();
  }, [isFetchingData]);

  if (isFetchingData) {
    return <Text>Loading...</Text>;
  }

  return <List items={articles} />;
};

type ArticleDetailProps = {
  favorite: boolean;
};

const ArticleDetail = ({ favorite }: ArticleDetailProps) => {
  const [article, setArticle] = useState<ArticleResponse>();
  const [isFetchingData, setFetchingState] = useState<boolean>(true);

  const route = useRoute();

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
    return <Text>Loading</Text>;
  }

  const renderFavoriteButtton = () => {
    if (favorite) {
      return <Text>Remove item</Text>;
    }
    return <Text>Add item to favorties</Text>;
  };

  return (
    <View>
      <Text>Detail: --- </Text>
      {renderFavoriteButtton()}
    </View>
  );
};

// technical requirements
/**
 * 6. animations
 * 1. redux and redux-persist
 * 2. ui library
 * 3. navigation
 * 4. boot
 * 5. test
 */

// functional requirements
/**
 * 1. List of art wokr with { thumbnail, small_desription, }
 * 2. detail Art work page { main_image, description, author, ...details }
 * 3. save as a favorties every article
 * 4. persist favorite list
 * 5. anitmations
 *
 */
const Stack = createNativeStackNavigator();

enum Routes {
  ArticleList = 'Article list',
  ArticleDetail = 'Detail'
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={Routes.ArticleList} component={Articles} />
        <Stack.Screen name={Routes.ArticleDetail} component={ArticleDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
