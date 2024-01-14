const path = require('path');

module.exports = {
  entry: "./src/app.ts", // エントリーポイント
  output: {
    path: path.resolve(__dirname, "dist"), // 出力ディレクトリ
    filename: "bundle.js", // 出力ファイル
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // .tsファイルに適用
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.ejs$/, // .ejsファイルに適用
        use: [
          {
            loader: "ejs-loader",
            options: {
              esModule: false,
            },
          },
        ],
      },
      {
        test: /\.css$/, // .cssファイルに適用
        use: [
          'style-loader',
          'css-loader'
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"], // .tsと.jsの両方を解決
  },
};