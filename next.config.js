
// @type {import('next').NextConfig}

module.exports = {
    async redirects() {
        return [
            {
                source: '/admin',
                destination: 'http://localhost:5000/',
                permanent: false
            },{
                source: '/fu',
                destination: 'http://google.com/',
                permanent: true
            }
        ];
    }
};