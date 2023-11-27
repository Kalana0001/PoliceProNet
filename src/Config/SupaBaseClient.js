import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://irhayssiwyezkocioozg.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlyaGF5c3Npd3llemtvY2lvb3pnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA0NDQ1NTksImV4cCI6MjAxNjAyMDU1OX0.rWBOMv_3B43qahmtt795U3cxPvX36ucHYozQr8rAQYg'
export const supabase = createClient(supabaseUrl, supabaseKey)