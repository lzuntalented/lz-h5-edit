module.exports = {
    "extends": "airbnb",
    rules: {
        "linebreak-style": [0 ,"error", "windows"],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/jsx-one-expression-per-line": [0]
    },
    "parser": "babel-eslint",
    "globals": {
        "window": true
    }
};