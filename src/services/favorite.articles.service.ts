import { getDatabase, ref, update, remove, child, get } from 'firebase/database';

import { FavoriteArticle } from '../views/article.detail';
import Articles from './articles.service';

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
      const articleIds = Object.keys((await get(child(ref(db), deviceId))).val());
      const params = 'ids=' + articleIds.join(',');
      const articles = await Articles.getAll(params);
      return articles;
    } catch (e) {
      throw new Error('no content');
    }
  }
};

export default FavoriteArticles;
