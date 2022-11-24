import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// views
import ArticleDetail from './src/views/article.detail';
import ArticlesList from './src/views/article.list';

// bootloaders
import bootLoaders from './src/boot-loaders';

// app
import app from './src/lib/app';

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
  const [isBooting, setBootState] = useState<boolean>(true);

  useEffect(() => {
    bootLoaders.forEach((loader) => {
      loader().boot(app);
      setBootState(false);
    });
  }, [isBooting]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={Routes.ArticleList} component={ArticlesList} />
        <Stack.Screen name={Routes.ArticleDetail} component={ArticleDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
