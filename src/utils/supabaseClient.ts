import { createClient } from '@supabase/supabase-js';


const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
console.log('ENV:', process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

if (!url || !key) {
    throw new Error('Missing supabase env variables')
}

export const supabase = createClient(url, key);