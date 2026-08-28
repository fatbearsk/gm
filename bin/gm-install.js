#!/usr/bin/env node
import { spawnSync } from 'node:child_process'

const global = process.argv.includes('-g') || process.argv.includes('--global')

function run(args) {
  const res = spawnSync('npx', args, { stdio: 'inherit', shell: process.platform === 'win32' })
  if (res.status !== 0) {
    process.exit(res.status ?? 1)
  }
}

const scopeFlag = global ? ['-g'] : []

run(['-y', 'skills', 'add', 'AnEntrypoint/gm', ...scopeFlag, '-y'])
run(['-y', 'add-mcp', 'github:AnEntrypoint/gm-mcp', '-n', 'gm', ...scopeFlag, '-y'])
