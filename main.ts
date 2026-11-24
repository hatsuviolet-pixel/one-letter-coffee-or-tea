import {writeFileSync, mkdirSync} from 'node:fs';
import {join} from 'node:path';
mkdirSync(join(process.cwd(), 'output'), {recursive: true});
writeFileSync(join(process.cwd(), 'output', 'entry.txt'), 'A');
