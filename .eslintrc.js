module.exports = {
  parser: '@typescript-eslint/parser', // Tells ESLint to use this parser installed at previous step
  parserOptions: {
    ecmaVersion: 2021, // The version of ECMAScript you are using
    sourceType: 'module', // Enables ECMAScript modules
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  extends: [
    'plugin:react/recommended', // Specify rules for React
    'plugin:react-hooks/recommended', // Specify rules for React hooks
    'plugin:@typescript-eslint/recommended', // Specify rules for Typescript
    'plugin:prettier/recommended',
  ],
  plugins: ['react-hooks'],
  rules: {
    // This is where you can disable/customize some of the rules specified by the plugins
    'react/react-in-jsx-scope': 'off',
    // We will use TypeScript's types for component props instead
    'react/prop-types': 'off',

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
  },
};

// .vscode/settings.json
// {
//    "editor.formatOnSave": false,
//    "editor.codeActionsOnSave": {
//      "source.fixAll.eslint": true
//    }
//  }
