import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// views
import ArticleDetail from './src/views/article.detail';
import ArticlesList from './src/views/article.list';
import FavoriteArticleList from './src/views/favorite.article.list';

// bootloaders
import bootLoaders from './src/boot-loaders';

// app
import app from './src/lib/app';
import { Routes } from './src/dtos/routes.dto';
import Loader from './src/ui-components/loader';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const ButtonNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={Routes.ArticleList} component={ArticlesList} />
      <Tab.Screen name={Routes.FavoriteArticleList} component={FavoriteArticleList} />
    </Tab.Navigator>
  );
};

const App = () => {
  const [isBooting, setBootState] = useState<boolean>(true);

  useEffect(() => {
    bootLoaders.forEach((loader) => {
      loader().boot(app);
      setBootState(false);
    });
  }, [isBooting]);

  if (isBooting) {
    <Loader />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name={Routes.ArticleList}
          component={ButtonNavigator}
        />
        <Stack.Screen name={Routes.ArticleDetail} component={ArticleDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
