const nextra = require('nextra');

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  defaultShowCopyCode: true
});

// ref - https://github.com/shuding/nextra/blob/8e86fc60deadf8d93114e313c770a0b611921e9b/examples/blog/next.config.js#L10
// https://github.com/shuding/nextra/issues/1085
// https://didikmulyadi.medium.com/deploy-nextjs-13-to-azure-app-service-with-github-action-efficient-way-3c1cea48a3f0

module.exports = withNextra({
  distDir: 'dist',
  output: "standalone",
})
