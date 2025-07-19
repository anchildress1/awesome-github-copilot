export default {
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
    ['remark-lint-no-unneeded-full-reference-link', false],
    ['remark-frontmatter', { type: 'yaml', marker: '-' }],
    ['remark-github', { repository: "anchildress1/awesome-github-copilot" }],
    ['remark-gfm', { tablePipeAlign: false }]
  ],
};
