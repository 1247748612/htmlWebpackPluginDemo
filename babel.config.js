module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        corejs: {
          version: 3
        },
        useBuiltIns: 'entry'
      }
    ],
    '@vue/babel-preset-jsx'
  ]
}
