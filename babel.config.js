module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    // react-native-dotenv
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        safe: false,
        allowUndefined: true,
        verbose: false,
      },
    ],
  ],
};
