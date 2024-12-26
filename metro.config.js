module.exports = {
  resolver: {
    sourceExts: ['jsx',
      'js',
      'ts',
      'tsx',
      'native',
      'native.js',
      'native.json',
      'json',
      'native.ts',
      'native.tsx',
    ], // 添加其他扩展名
  },
  server: {
    rewriteRequestUrl: (url) => {
      if (!url.endsWith('.bundle')) {
        return url;
      }
      // https://github.com/facebook/react-native/issues/36794
      // JavaScriptCore strips query strings, so try to re-add them with a best guess.
      return url + '?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true';
    },
  },
  // transformer: {
  //   getTransformOptions: async () => ({
  //     transform: {
  //       experimentalImportSupport: true,
  //       inlineRequires: true,
  //     },
  //   }),
  // },
};