// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://qloiwuwrdaoerbfvvnhf.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFsb2l3dXdyZGFvZXJiZnZ2bmhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY2NTM4NTIsImV4cCI6MjA1MjIyOTg1Mn0.JkDFNhRlajeQIY00-u5UVqNx0_7Q-U3oy1fjjj-XHqc";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);