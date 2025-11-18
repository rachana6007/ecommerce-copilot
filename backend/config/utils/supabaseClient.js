// Initialize Supabase client using @supabase/supabase-js and environment variables
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
dotenv.config();
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);
(async () => {
    try {
        const { error } = await supabase.auth.getSession();

        if (error) {
            console.error("Supabase connection failed:", error.message);
        } else {
            console.log("Supabase connection successful!");
        }
    } catch (err) {
        console.error("Unexpected error while connecting:", err.message);
    }
})();
export default supabase;