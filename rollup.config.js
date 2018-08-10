import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import sourcemaps from 'rollup-plugin-sourcemaps';
import json from 'rollup-plugin-json';
import typescript from 'rollup-plugin-typescript';
import postcss from 'rollup-plugin-postcss-modules';
import autoprefixer from 'autoprefixer';
import postcssNesting from 'postcss-nesting';
import atImport from 'postcss-import';
import posthtml from 'rollup-plugin-posthtml';
import posthtmlCssModules from 'posthtml-css-modules';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.js',
    format: 'iife',
    sourcemap: true
  },
  plugins: [
    postcss({
      extract: true,
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
    sourcemaps()
  ]
}
