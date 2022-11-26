import { getDatabase, ref, update, remove, child, get } from 'firebase/database';

import { FavoriteArticle } from '../dtos/article.dto';
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

      if (articleIds) {
        const params = 'ids=' + articleIds.join(',');
        const articles = await Articles.getAll(params);
        return articles;
      }
      return [];
    } catch (e) {
      throw new Error('no content');
    }
  }
};

export default FavoriteArticles;
