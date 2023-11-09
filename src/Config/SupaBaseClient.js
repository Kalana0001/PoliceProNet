import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ckfobubhkligmwfqjgmj.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNrZm9idWJoa2xpZ213ZnFqZ21qIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc1NjQ5ODUsImV4cCI6MjAxMzE0MDk4NX0.ZrhG648BuZ1zuq062tHR59oHOsQVgymcuY1U8i0iU8c'
export const supabase = createClient(supabaseUrl, supabaseKey)