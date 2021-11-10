const env = process.env;

const config = {

    mySQL:{
        host: env.DB_HOST || 'localhost',
        user: env.DB_USER || 'root',
        password: env.DB_PASSWORD || '',
        database: env.DB_NAME || 'eShop'
    },
    mongo:{
        url: env.DB_URL || 'mongodb://localhost:27017/eShop',
        database: env.DB_NAME || 'eShop'
    },
};
export default config;