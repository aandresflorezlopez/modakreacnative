import React from 'react';
import { Text, Image } from 'react-native';
import { Article as ArticleDto } from '../../dtos/item.dto';
import { TouchableOpacityItem, ImageThumbnail } from './styles';
import { useNavigation } from '@react-navigation/native';

import styled from 'styled-components/native';

type ItemProps = {
  data: ArticleDto;
};

const Item = ({ data }: ItemProps) => {
  const navigation = useNavigation();
  const thumbnail = `https://www.artic.edu/iiif/2/${data.image_id}/full/843,/0/default.jpg`;

  const onDetail = () => {
    navigation.navigate('Detail', { articleId: data.id });
  };

  return (
    <TouchableOpacityItem onPress={onDetail}>
      <ImageThumbnail source={{ uri: thumbnail }} />
      <Text>{data.id}</Text>
      <Text>{data.title}</Text>
      <Text>{data.smallDescription}</Text>
    </TouchableOpacityItem>
  );
};

export default Item;
