/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'byeilculfqugwxetgrkj.supabase.co',
            port: '',
         
          },
        ],
      },
   
   
}



module.exports = nextConfig

