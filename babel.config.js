module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', 'module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            '*': '.',
            '@root': './',
            '@src': './src',
            '@containers': './src/containers',
            '@dtos': './src/dtos',
            '@lib': './src/lib',
            '@services': './src/services',
            '@ui-components': './src/ui-components',
            '@views': './src/views'
          }
        }
      ]
    ]
  };
};
