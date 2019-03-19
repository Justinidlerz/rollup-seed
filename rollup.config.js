import buble from 'rollup-plugin-buble';
import typescript from 'rollup-plugin-typescript2';

const pkg = require('./package.json');

export default {
  input: 'src/index.ts',
  plugins: [
    typescript(),
    buble(),
  ],
  external: Object.keys(pkg.dependencies),
  output: [
    {
      exports: 'named',
      format: 'cjs',
      file: pkg.main,
    },
  ],
};
