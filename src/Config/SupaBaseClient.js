import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vejouowrerdzljlkgbsy.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZlam91b3dyZXJkemxqbGtnYnN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk0OTg3MzgsImV4cCI6MjAxNTA3NDczOH0.PMsVoOWASpjWrwIuRjpU8ppSgx_EMJjeb9hlamCfG0Q'
export const supabase = createClient(supabaseUrl, supabaseKey)