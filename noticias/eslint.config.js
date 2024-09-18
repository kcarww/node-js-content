import { ESLint } from 'eslint'


export default [
  {
    ignores: ['node_modules/**'], 
  },
  {
    files: ['**/*.js'], 
    languageOptions: {
      ecmaVersion: 2021,  
      sourceType: 'module' 
    },
    rules: {
      'quotes': ['error', 'single'], 
      'semi': ['error', 'never'],  
    },
    linterOptions: {
      fix: true,
    }
  }
]