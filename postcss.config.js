module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-preset-env'),
    require('postcss-custom-properties'),
    require('postcss-mixins'),
    require('postcss-at-rules-variables'),
    require('postcss-for'),
    require('postcss-simple-vars'),
    require('postcss-calc'),
    require('postcss-nested')
  ]
};
