module.exports = {
    server: {
        port: process.env.PORT,
    },
    db: {
        url: process.env.DB_URL,
    },
    token: {
        key: process.env.JWT_KEY,
        expireTime: process.env.TOKEN_COOKIE_EXPIRES_IN
    }
}