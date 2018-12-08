module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./app'],
          alias: {
            Reducers: './app/reducers',
            Components: './app/components',
            Constants: './app/constants',
            Actions: './app/actions',
            Types: './app/types',
            Navigation: './app/navigation'
          }
        }
      ]
    ]
  };
};
//Для корректной работы алиасов, их необходимо расписывать в 3 местах: babel.config.js, .eslintrc, .flowconfig
