export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-empty': [2, 'never'],
    'type-case': [2, 'always', 'lower-case'],
    'type-enum': [2, 'always', [
      'build', 'chore', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test'
    ]],
    'scope-empty': [2, 'never'],
    'scope-case': [2, 'always', 'lower-case'],
    'scope-enum': [2, 'always', [
      'config', 'instructions', 'prompts', 'chatmodes', 'build', 'deps', 'tooling', 'readme'
    ]],
    'subject-case': [2, 'always', ['sentence-case']],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'subject-max-length': [2, 'always', 72],
    'subject-min-length': [2, 'always', 1],
    'header-trim': [2, 'always'],
    'body-leading-blank': [2, 'always'],
    'body-empty': [2, 'never'],
    'body-max-line-length': [2, 'always', 100],
    'footer-leading-blank': [2, 'always',],
    'footer-max-line-length': [2, 'always', 100],
    'header-max-length': [2, 'always', 72],
    'signed-off-by': [2, 'always'],
    'trailer-exists': [2, 'always', ['Signed-off-by']]
  }
};
