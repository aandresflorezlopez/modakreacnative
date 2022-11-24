import React from 'react';
import { SafeAreaView, FlatList, ListRenderItem, View, Text } from 'react-native';

import ItemComponent from '../ui-components/item';

import { Article as ArticleDto } from '../dtos/item.dto';

interface ListProps {
  items: ArticleDto[];
}

const List = ({ items }: ListProps) => {
  const onOpenItemDetail = () => {};

  const renderItem: ListRenderItem<ArticleDto> = ({ item }) => (
    <ItemComponent data={item} />
  );

  return (
    <SafeAreaView
      style={{ flex: 20, justifyContent: 'center', alignContent: 'center', padding: 10 }}
    >
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item: ArticleDto) => item.id}
      />
    </SafeAreaView>
  );
};

export default List;
