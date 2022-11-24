import { Articles as ArticlesDTO } from '../dtos/item.dto';
import { ArticleResponse as ArticleDTO } from '../dtos/item.dto';

import app from '../lib/app';

import { getDatabase, ref, update, remove, child, get } from 'firebase/database';

import { FavoriteArticle } from '../views/article.detail';

const FavoriteArticles = {
  db: getDatabase(),
  addOne: async ({ articleId, deviceId, title }: FavoriteArticle): Promise<void> => {
    try {
      update(ref(FavoriteArticles.db, deviceId), {
        [articleId]: title
      });
    } catch (e) {
      throw new Error('no content');
    }
  },
  removeOneById: async ({ articleId, deviceId }): Promise<void> => {
    try {
      remove(ref(FavoriteArticles.db, deviceId + [articleId]));
    } catch (e) {
      throw new Error('no content');
    }
  },
  getAll: async (deviceId: string): Promise<any> => {
    try {
      return get(child(ref(FavoriteArticles.db), deviceId));
    } catch (e) {
      throw new Error('no content');
    }
  }
};

export default FavoriteArticles;
