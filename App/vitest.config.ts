import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['src/**/*.spec.ts'],
    coverage: {
      provider: 'v8', // https://vitest.dev/guide/coverage
    },
    setupFiles: ['src/test-setup.ts'],
  },
});
