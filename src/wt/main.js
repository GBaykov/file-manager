import { fileURLToPath } from 'url';
import path from 'path';
import { cpus } from 'os';
import { Worker } from 'worker_threads';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'worker.js');

const performCalculations = async () => {
    const cores = cpus().length;
    const workers = [];
    const createWorker = (data) => {
        return new Promise((resolve) => {
            const worker = new Worker(filePath, {workerData: data});

            worker.on('message', (data) => resolve({status: 'resolved', data}));
            worker.on('error', () => resolve({status: 'error', data: null}))
        });
    }

    for (let i = 0; i < cores; i++) {
        workers.push(createWorker(i + 10));
    }
    const result = await Promise.all(workers);

    console.log(result);
};

await performCalculations();
