module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/test/index.js'],
  testMatch: [
    '<rootDir>/test/utils-spec.js',
    '<rootDir>/test/components/button-spec.js',
    '<rootDir>/test/components/responsive-spec.js'
  ]
};
