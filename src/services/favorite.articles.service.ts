import { Articles as ArticlesDTO } from '../dtos/item.dto';
import { ArticleResponse as ArticleDTO } from '../dtos/item.dto';

import app from '../lib/app';

import { getDatabase, ref, set } from 'firebase/database';

const FavoriteArticles = {
  addOne: async (userId, name, email, imageUrl): Promise<void> => {
    try {
      const db = getDatabase();
      set(ref(db, 'users/' + userId), {
        username: name,
        email: email,
        profile_picture: imageUrl
      });
    } catch (e) {
      throw new Error('no content');
    }
  }
};

export default FavoriteArticles;
