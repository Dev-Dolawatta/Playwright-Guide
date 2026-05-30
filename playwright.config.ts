import type { PlaywrightTestConfig } from "playwright/test";// See https://playwright.dev/docs/test-configuration.

const config: PlaywrightTestConfig = {
  testMatch:["tests/record.test.ts"],// Specify the test files to run, in this case only the Login.test.ts file
  use:{
    headless : false
  },
  //reporter configuration to generate reports in different formats
  reporter:[["dot"],//GREEN if right and RED if wrong
  ["json",{outputFile:"jsonReports/report.json"}],//generate a json report in the specified path
  ["html",{open:"never"}]]//generate an html report in the specified path and open it manually when needed
};
// Look for test files in the "tests" directory, relative to this configuration file.

export default config;
