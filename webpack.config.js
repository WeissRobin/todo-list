module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'index.js',
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.s[ac]ss$/i,
            use: [
              "style-loader",
              "css-loader",
              "sass-loader",
            ],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
            type: 'asset/resource',
          },
          {
            test: /\.mp4$/,
            use: 'file-loader?name=assets/[video].[mp4]',
          },
        ],
    },
}