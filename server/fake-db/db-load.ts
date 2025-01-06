import { readFileSync } from 'fs'
import type { JSONAsDatabase } from './db-definition'
import { DB_OUTPUT_FILE } from './db-files'

export const loadDatabase = (): JSONAsDatabase => {
    const data = readFileSync(DB_OUTPUT_FILE, 'utf-8')
    return JSON.parse(data) as JSONAsDatabase
}
