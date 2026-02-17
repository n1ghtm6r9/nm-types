module.exports = {
  roots: ['<rootDir>/tests'],
  testMatch: ['<rootDir>/tests/**/*.spec.ts'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@nmxjs/validation$': '<rootDir>/__mocks__/@nmxjs/validation.ts',
    '^@nmxjs/constants$': '<rootDir>/__mocks__/@nmxjs/constants.ts',
  },
};
