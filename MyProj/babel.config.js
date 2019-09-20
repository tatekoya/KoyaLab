module.exports = {
  plugins: [
    ['@babel/plugin-proposal-class-properties', {loose: true}],
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-transform-regenerator',
    [
      '@babel/plugin-transform-runtime',
      {
        helpers: false,
        regenerator: true,
      },
    ],
    '@babel/plugin-transform-flow-strip-types',
  ],
  presets: ['module:metro-react-native-babel-preset'],
};
