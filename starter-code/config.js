const env = process.env;

export const config = {

    mySQL:{
        host: env.DB_HOST || 'localhost',
        user: env.DB_USER || 'root',
        password: env.DB_PASSWORD || '',
        //database: env.DB_NAME || 'eShop'
        database: env.DB_NAME || 'eshop'
    },
    mongo:{
        url: env.DB_URL || 'mongodb://localhost:27017',
        database: env.DB_NAME || 'eShop'
    },
}