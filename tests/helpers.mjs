import { existsSync, readFileSync, writeFileSync, unlinkSync } from 'node:fs';
import process from "node:process";

import 'dotenv/config';

const packageJsonPath = new URL('../package.json', import.meta.url).pathname;
const pkg = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));


const llfn = `${import.meta.dirname}/.last-login`;

export const authLimiter = {
	setLastLogin: () => {
		writeFileSync(llfn, `${Math.floor(Date.now()/1000)}`);
	},
	getLastLogin: () => {
		return existsSync(llfn) ? Number(readFileSync(llfn)) || 0 : 0;
	},
	release: () => {
		existsSync(llfn) && unlinkSync(llfn);
	}
}

export function checkEnvCredentials() {
    const requiredVars = ['HA_EMAIL', 'HA_PASS'];
    requiredVars.forEach((variable) => {
        if (!process.env[variable]) {
            throw new Error(`Missing required environment variable: ${variable}`);
        }
    });
}

export const testSessionStoreId = `${pkg.name}_session_test`;
