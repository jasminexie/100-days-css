module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-preset-env'),
    require('postcss-custom-properties'),
    require('postcss-mixins'),
    require('postcss-at-rules-variables'),
    require('postcss-for'),
    require('postcss-random')({
      noSeed: true
    }),
    require('postcss-simple-vars'),
    require('postcss-calc')({
      warnWhenCannotResolve: true
    }),
    require('postcss-nested'),
    require('postcss-color-function')({
      preserveCustomProps: false // delete color function with custom properties
    })
  ]
};
