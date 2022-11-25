jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');

  return {
    ...actualNav,
    useNavigation: () => ({
      navigation: {
        navigate: jest.fn()
      }
    }),
    useRoute: () => ({
      route: {
        param: {
          articleId: 'article-id'
        }
      }
    })
  };
});
