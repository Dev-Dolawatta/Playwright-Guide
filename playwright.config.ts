import type { PlaywrightTestConfig } from "playwright/test";// See https://playwright.dev/docs/test-configuration.

const config: PlaywrightTestConfig = {
  testMatch:["tests/record.test.ts"],// Specify the test files to run, in this case only the Login.test.ts file
  use:{
    headless : false
  }
};
// Look for test files in the "tests" directory, relative to this configuration file.

export default config;
