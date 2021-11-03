const config = {
  host: process.env.HOST || '0.0.0.0',
  port: process.env.PORT || '3000',
  dbUrl: process.env.DB_URI,
  jwtSecret: process.env.JWT_SECRET,
}

module.exports = config;