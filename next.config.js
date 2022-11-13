
// @type {import('next').NextConfig}

module.exports = {
    async redirects() {
        return [
            {
                source: '/admin',
                destination: 'http://localhost:5000/',
                permanent: true
            }
        ];
    }
};