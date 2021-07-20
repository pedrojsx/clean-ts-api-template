module.exports = {
  roots: ['<rootDir>/src', '<rootDir>/test'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/main/@types/*.ts'
  ],
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  moduleNameMapper: {
    '@/(.*)': ['<rootDir>/src/$1'],
    '@test/(.*)': ['<rootDir>/test/$1']
  },
  testTimeout: 30000
}
