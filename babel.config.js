module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.ts',
          '.tsx',
          '.json',
        ],
        alias: {
          '@screens': './src/screens',
          '@assets': './src/assets',
          '@components': './src/components',
          '@utils': './src/utils',
          '@store': './src/store',
          '@routes': './src/routes',
          '@hooks': './src/hooks',
          '@analytics': './src/analytics',
        },
      },
    ],
  ],
};
