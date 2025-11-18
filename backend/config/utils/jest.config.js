// Generate a Jest config for an ES module Node.js Express project
// Enable mocks, support ES modules, and ignore Supabase SDK

export default {
    testEnvironment: "node",
    transform: {},
    moduleFileExtensions: ["js", "json", "node"],
    moduleNameMapper: {
        '^../../config/utils/supabaseClient.js$': '<rootDir>/__mocks__/supabaseClient.js'
    },
    testPathIgnorePatterns: ["/node_modules/", "/dist/"],
    collectCoverage: true,
    coverageDirectory: "<rootDir>/coverage/",
    coverageReporters: ["text", "lcov"],
};


