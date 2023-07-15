/** @type {import('next').NextConfig} */
const nextConfig = {
    supabase: {
        client: {
            auth: {
                persistSession: false //or true
            }
        }
      }
}

module.exports = nextConfig

