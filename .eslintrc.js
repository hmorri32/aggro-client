module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
    "parser": "babel-eslint",
    "parserOptions": {
      "sourceType": "module",
      "ecmaVersion": 2017,
      "ecmaFeatures": {
        "experimentalObjectRestSpread": true,
        "jsx": true,
        "modules": true
      },
  },
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  "rules": {
    "react/prop-types": [0],
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "double"
    ],
    "semi": [
      "error",
      "always"
    ]
  }
};
