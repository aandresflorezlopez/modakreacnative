import React from 'react';
import { SafeAreaView, FlatList, ListRenderItem, View, Text } from 'react-native';

import ItemComponent from '../ui-components/item';

import { Article } from '../dtos/article.dto';

interface ListProps {
  items: Article[];
}

const List = ({ items }: ListProps) => {
  const renderItem: ListRenderItem<Article> = ({ item }) => <ItemComponent data={item} />;

  return (
    <SafeAreaView
      style={{ flex: 20, justifyContent: 'center', alignContent: 'center', padding: 10 }}
    >
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item: Article) => item.id}
      />
    </SafeAreaView>
  );
};

export default List;
