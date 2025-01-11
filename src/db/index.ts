import { getRequestContext } from '@cloudflare/next-on-pages';
import { drizzle } from 'drizzle-orm/d1';

export const runtime = 'edge'

const DB = getRequestContext().env.DB

function getDB() {
  return drizzle(DB)
}
