// Al Arqam Academy - Supabase Configuration
const SUPABASE_URL = "https://rjqvyvovktzdsblglclx.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJqcXZ5dm92a3R6ZHNibGdsY2x4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg1OTg0NzgsImV4cCI6MjEwNDE3NDQ3OH0.awUDyp8dwAYrQBvPicNc-jnlNxSxQ6UcPgAIgndxEC0";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Auth Guard Function for protected pages
async function checkAuth() {
    const { data: { session } } = await supabaseClient.auth.getSession();
    if (!session && !window.location.pathname.endsWith('login.html')) {
        window.location.href = 'login.html';
    }
}
