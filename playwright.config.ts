import type { PlaywrightTestConfig } from "playwright/test";// See https://playwright.dev/docs/test-configuration.

const config: PlaywrightTestConfig = {
  testMatch:["tests/Login.test.ts"] // Specify the test files to run, in this case only the Login.test.ts file
}
// Look for test files in the "tests" directory, relative to this configuration file.

export default config;
