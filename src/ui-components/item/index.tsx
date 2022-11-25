import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ListItem, Avatar } from '@react-native-material/core';

// dtos
import { Routes } from '../../dtos/routes.dto';
import { Article as ArticleDto } from '../../dtos/article.dto';

type ItemProps = {
  data: ArticleDto;
};

const Item = ({ data }: ItemProps) => {
  const navigation = useNavigation();
  const thumbnail = `https://www.artic.edu/iiif/2/${data.image_id}/full/843,/0/default.jpg`;

  const onDetail = () => {
    navigation.navigate(Routes.ArticleDetail as never, { articleId: data.id } as never);
  };

  return (
    <ListItem
      leadingMode="avatar"
      leading={<Avatar image={{ uri: thumbnail }} />}
      title={data.title}
      secondaryText={data.title}
      onPress={onDetail}
    />
  );
};

export default Item;
