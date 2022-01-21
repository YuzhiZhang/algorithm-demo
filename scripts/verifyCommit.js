// Invoked on the commit-msg git hook by husky.
import pico from 'picocolors';
import { readFileSync } from 'fs';

const msgPath = process.argv[2];
const msg = readFileSync(msgPath, 'utf-8').trim();

const releaseRE = /^v\d/;
const commitRE =
  /^(revert: )?(feat|fix|docs|dx|refactor|perf|test|workflow|build|ci|chore|types|wip|release|deps)(\(.+\))?: .{1,50}/;

if (!releaseRE.test(msg) && !commitRE.test(msg)) {
  console.log();
  console.error(
    `  ${pico.bgRed.white(' ERROR ')} ${pico.red(
      `invalid commit message format.`
    )}\n\n` +
      pico.red(
        `  Proper commit message format is required for automated changelog generation. Examples:\n\n`
      ) +
      `    ${pico.green(`feat: add 'comments' option`)}\n` +
      `    ${pico.green(`fix: handle events on blur (close #28)`)}\n\n` +
      pico.red(`  See .github/commit-convention.md for more details.\n`)
  );
  process.exit(1);
}
