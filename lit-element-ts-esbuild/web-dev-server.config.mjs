import { esbuildPlugin } from "@web/dev-server-esbuild";

export default {
  nodeResolve: {
    exportConditions: ['browser', 'development'],
    browser: true,
  },
  plugins: [esbuildPlugin({ ts: true })],
};
