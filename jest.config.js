/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  testRegex: '.*\\.test\\.(ts|tsx)$',
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/tools/jest/fileMock.js',
    '\\.(s?css)$': 'identity-obj-proxy',
  },
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/test/**/*.{js,jsx,ts,tsx}',
  ],
  testURL: 'http://localhost',
  testEnvironment: 'jsdom',
  clearMocks: true,
};
