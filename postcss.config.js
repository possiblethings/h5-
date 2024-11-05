module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 5,
      propList: ['*'],
      selectorBlackList: ['html'],
      replace: true,
      mediaQuery: false,
      minPixelValue: 0
    }
  }
};
