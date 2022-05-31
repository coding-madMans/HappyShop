
// @type {import('next').NextConfig}

module.exports = {
    async redirects() {
        return [
            {
                source: '/admin',
                destination: 'http://localhost:5555/',
                permanent: false
            }
        ];
    }
};