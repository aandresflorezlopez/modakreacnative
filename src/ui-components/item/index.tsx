import React from 'react';
import { Text } from 'react-native';
import { Article as ArticleDto } from '../../dtos/item.dto';
import { TouchableOpacityItem } from './styles';
import { useNavigation } from '@react-navigation/native';

type ItemProps = {
  data: ArticleDto;
};

const Item = ({ data }: ItemProps) => {
  const navigation = useNavigation();

  const onDetail = () => {
    navigation.navigate('Detail', { articleId: data.id });
  };

  return (
    <TouchableOpacityItem onPress={onDetail}>
      <Text>{data.id}</Text>
      <Text>{data.description}</Text>
      <Text>{data.smallDescription}</Text>
    </TouchableOpacityItem>
  );
};

export default Item;
