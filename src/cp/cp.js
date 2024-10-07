import { fileURLToPath } from 'url';
import path from 'path';
import { fork } from 'child_process';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'files', 'script.js');

const spawnChildProcess = async (args) => {
    fork(filePath, args, { silent: false })
};

spawnChildProcess( ['arg1', 'arg2', 'arg3'] );
