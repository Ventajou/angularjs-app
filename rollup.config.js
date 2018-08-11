import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import sourcemaps from 'rollup-plugin-sourcemaps';
import json from 'rollup-plugin-json';
import typescript from 'rollup-plugin-typescript';
import postcss from 'rollup-plugin-postcss-modules';
import autoprefixer from 'autoprefixer';
import postcssNesting from 'postcss-nesting';
import atImport from 'postcss-import';
// import posthtml from 'rollup-plugin-posthtml';
import posthtml from 'rollup-plugin-posthtml-template';
import posthtmlCssModules from 'posthtml-css-modules';
import { uglify } from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';
import config from './package.json';

// Build the list of external modules from package.json
const external = [];
for (let key in config.dependencies) { external.push(key); }

export default {
  input: 'src/index.ts',
  external,
  output: {
    file: 'dist/index.js',
    format: 'iife',
    sourcemap: true,
    globals: {
      angular: 'angular',
      tslib: 'tslib'
    }
  },
  plugins: [
    postcss({
      extract: true,
      sourceMap: true,
      plugins: [atImport(), autoprefixer(), postcssNesting()],
      writeDefinitions: true,
      extensions: ['.pcss']
    }),
    posthtml(),
    typescript({ typescript: require('typescript') }),
    resolve({
      jsnext: true,
      preferBuiltins: false,
      browser: true
    }),
    json(),
    commonjs(),
    uglify({ mangle: { keep_fnames: true }, compress: false, keep_fnames: true }, minify),
    sourcemaps()
  ]
}
