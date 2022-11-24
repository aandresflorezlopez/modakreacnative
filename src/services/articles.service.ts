import { Articles as ArticlesDTO } from '../dtos/item.dto';
import { ArticleResponse as ArticleDTO } from '../dtos/item.dto';

const BASE_URL = 'https://api.artic.edu/api/v1/';

const Articles = {
  getAll: async (params: string = ''): Promise<ArticlesDTO> => {
    try {
      const res = await fetch(`${BASE_URL}artworks?${params}`);
      return res.json() as unknown as ArticlesDTO;
    } catch (e) {
      throw new Error('no content');
    }
  },

  findOneById: async (articleId: number): Promise<ArticleDTO> => {
    try {
      const res = await fetch(`${BASE_URL}artworks/${articleId}`);
      return res.json() as unknown as ArticleDTO;
    } catch (e) {
      throw new Error('no content');
    }
  }
};

export default Articles;
