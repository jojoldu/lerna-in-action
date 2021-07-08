const sharedConfig = require('../../jest.config.ts');

module.exports = {
    ...sharedConfig,
    testEnvironment: 'node'
};
