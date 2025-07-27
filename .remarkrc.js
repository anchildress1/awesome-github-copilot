import remarkGfm from 'remark-gfm';
import remarkFrontmatter from 'remark-frontmatter';

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
    [remarkFrontmatter, { type: 'yaml', marker: '-' }],
    [remarkGfm, { singleTilde: false, tablePipeAlign: false }],
  ],
};
