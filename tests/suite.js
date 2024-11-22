import Mocha from 'mocha';
import { readdirSync } from 'node:fs';
import { join } from 'node:path';

const mocha = new Mocha({
  reporter: 'spec',
  ui: 'bdd',
});

readdirSync(import.meta.dirname)
  .filter(file => file.endsWith('.test.js'))
  .sort()
  .forEach(file => mocha.addFile(join(import.meta.dirname, file)));

mocha.run(failures => {
  if (failures) {
    console.error(`${failures} test(s) failed.`);
    process.exit(1); // Exit with a non-zero status if there were failures
  } else {
    console.log('All tests passed!');
    process.exit(0);
  }
});
