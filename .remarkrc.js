export default {
  presets: [
    ['remark-preset-github', { repository: "anchildress1/awesome-github-copilot" }]
  ],
  settings: {
    emphasis: '_',
    bullet: '-',
    bulletOther: '*',
    listItemIndent: 'one',
    rule: '-',
    tablePipeAlign: false,
    maximumLineLength: false,
    firstHeadingLevel: 1,
  },
  plugins: [
    ['remark-frontmatter', { type: 'yaml', marker: '-' }],
  ],
};
