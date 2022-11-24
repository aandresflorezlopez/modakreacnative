import { Articles as ArticlesDTO } from '../dtos/item.dto';
import { ArticleResponse as ArticleDTO } from '../dtos/item.dto';

import app from '../lib/app';

import { getDatabase, ref, update, remove, child, get } from 'firebase/database';

import { FavoriteArticle } from '../views/article.detail';

const FavoriteArticles = {
  addOne: async ({ articleId, deviceId, title }: FavoriteArticle): Promise<void> => {
    try {
      const db = getDatabase();
      update(ref(db, deviceId), {
        [articleId]: title
      });
    } catch (e) {
      throw new Error('no content');
    }
  },
  removeOneById: async ({ articleId, deviceId }): Promise<void> => {
    try {
      const db = getDatabase();
      remove(ref(db, deviceId + [articleId]));
    } catch (e) {
      throw new Error('no content');
    }
  },
  getAll: async (deviceId: string): Promise<any> => {
    try {
      const db = getDatabase();
      return get(child(ref(db), deviceId));
    } catch (e) {
      throw new Error('no content');
    }
  }
};

export default FavoriteArticles;
