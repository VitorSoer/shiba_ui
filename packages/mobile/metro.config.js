const { createMetroConfiguration } = require('expo-yarn-workspaces');

const metroConfig = createMetroConfiguration(__dirname);

metroConfig.transformer = {
  ...metroConfig.transformer,
  unstable_allowRequireContext: true,
};

module.exports = metroConfig;
