import commonjs from '@rollup/plugin-commonjs';

export default {
  nodeResolve: {
    exportConditions: ['browser', 'development'],
    browser: true,
  },
  plugins: [
    commonjs(),
  ],
};
