import { CLI_VERSION, HELP_MENU } from '@@/data/constants.js';

import { execSync } from 'node:child_process';

describe('index.js', () => {
  test('devEngines --help', () => {
    let stdout;
    try {
      stdout = String(execSync('node index.js')).trim();
    } catch (error) {
      console.log('Error:' + error.toString());
    }

    expect(stdout)
      .toEqual(HELP_MENU);
  });

  test('devEngines -v', () => {
    let stdout;
    try {
      stdout = String(execSync('node index.js -v')).trim();
    } catch (error) {
      console.log('Error:' + error.toString());
    }

    expect(stdout)
      .toEqual('devEngines ' + CLI_VERSION);
  });
});
