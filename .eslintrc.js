module.exports = {
    "extends": "airbnb",
    rules: {
        "linebreak-style": [0 ,"error", "windows"],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/jsx-one-expression-per-line": [0],
        "jsx-a11y/no-noninteractive-element-interactions": 0,
        "jsx-a11y/click-events-have-key-events": 0,
        "react/forbid-prop-types": 0,
        "jsx-a11y/no-static-element-interactions": 0,
        "import/prefer-default-export": 0
    },
    "parser": "babel-eslint",
    "globals": {
        "window": true
    }
};