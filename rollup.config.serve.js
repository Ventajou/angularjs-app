import baseConfig from './rollup.config';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

baseConfig.plugins = baseConfig.plugins.concat([
  serve({
    contentBase: ['dist', 'static'],
    historyApiFallback: true,
    port: 3000
  }),
  livereload({
    watch: ['dist', 'static'],
    applyCSSLive: true
  })
]);

export default baseConfig;
