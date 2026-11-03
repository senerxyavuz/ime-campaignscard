import { execFileSync } from 'node:child_process';
execFileSync('npm', ['run', 'build:portal'], {stdio:'inherit'});
await import('./export-smile-root.mjs');
