module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        // cf. https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/TYPED_LINTING.md#i-get-errors-telling-me-the-file-must-be-included-in-at-least-one-of-the-projects-provided
        project: "./.config/tsconfig.eslint.json",
        ecmaVersion: 2021,
        ecmaVersion: {
            jsx: true
        }
    },
    env: {
        "es6": true
    },
    plugins: [
        "@typescript-eslint",
        // "jest"
    ],
    extends: [
        "eslint:recommended",
        "plugin:eslint-comments/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:mdx/recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        // "plugin:jest/recommended"
    ],
    settings: {
        react: {
            version: "detect"
        }
    },
    globals: {
        process: true
    },
    overrides: [],
    root: true,
    rules: {
        "eslint-comments/no-unused-disable": "error",
        "quotes": [
            "error",
            "double"
        ],
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "react/prop-types": "off",
        "react/react-in-jsx-scope": "off",
        "jsx-a11y/anchor-is-valid": "off",
        "@typescript-eslint/explicit-function-return-type": [
            "warn",
            {
                "allowExpressions": true,
                "allowConciseArrowFunctionExpressionsStartingWithVoid": true
            }
        ],
        "import/order": [
            "warn",
            {
                "alphabetize": {
                    "order": "asc"
                },
                "newlines-between": "always"
            }
        ]
    }
}