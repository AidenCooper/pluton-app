const { getDefaultConfig } = require("expo/metro-config");
const { mergeConfig } = require("metro-config");

const defaultConfig = getDefaultConfig(__dirname);

// Enable platform resolution for tv: *.tv.tsx *.android.tv.tsx *.ios.tv.tsx
const config = {
  resolver: process.env.BUILDING_FOR_TV
    ? {
        sourceExts: [].concat(
          defaultConfig.resolver.sourceExts.map(
            (extension) => `tv.${extension}`
          ),
          defaultConfig.resolver.sourceExts
        ),
      }
    : undefined,
};

module.exports = mergeConfig(defaultConfig, config);
