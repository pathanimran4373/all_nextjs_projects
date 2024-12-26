/** @type {import('next').NextConfig} */
// protects the routes and redirect on specific page its will be used in development
const nextConfig = {
    redirects: async ()=>{
        return [
            {
                source:'/about',
                destination:"/login",
                permanent:false
            },
            // {
            //     source:'/product',
            //     destination:"/productlist",
            //     permanent:false
            // },
            {
                source:'/customer/:details',
                destination:"/login",
                permanent:false
            }
        ]
    }
}

module.exports = nextConfig
