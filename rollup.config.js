import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import sourcemaps from 'rollup-plugin-sourcemaps';
import json from 'rollup-plugin-json';
import typescript from 'rollup-plugin-typescript';
import postcss from 'rollup-plugin-postcss-modules';
import autoprefixer from 'autoprefixer';
import postcssNesting from 'postcss-nesting';
import atImport from 'postcss-import';
import posthtml from 'rollup-plugin-posthtml-template';
import { terser } from 'rollup-plugin-terser';
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
      tslib: 'tslib',
      react: 'React',
      'react-dom': 'ReactDOM'
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
    posthtml({ template: true }),
    resolve({
      jsnext: true,
      main: true,
      preferBuiltins: false,
      browser: true
    }),
    json(),
    commonjs({
      include: 'node_modules/**',
      exclude: [],
      extensions: ['.js']
    }),
    typescript({ typescript: require('typescript'), exclude: ['node_modules/**'] }),
    terser({ mangle: { keep_fnames: true }, compress: false, keep_fnames: true }),
    sourcemaps()
  ]
}
