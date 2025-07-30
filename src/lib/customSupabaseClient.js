import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zczurrdzcanzihkaumlj.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpjenVycmR6Y2Fuemloa2F1bWxqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM4NjE4MjksImV4cCI6MjA2OTQzNzgyOX0.Qmre0hGRuZwWh5bT2IW3WLIzKOYAOds0EPPdeaJlWk0';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);