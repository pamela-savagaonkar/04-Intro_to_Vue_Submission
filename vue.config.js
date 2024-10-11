// vue.config.js
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/04-Intro_to_Vue_Submission/'  // Set this to your repo name for production (GitHub Pages)
    : '/',  // Use '/' for local development
  outputDir: 'dist',  // Output directory for build
  assetsDir: 'assets',  // Directory for static assets
  devServer: {
    host: 'localhost',
    port: 8080,
  },
};
