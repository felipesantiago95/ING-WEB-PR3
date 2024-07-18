module.exports = {
    client: 'pg',
    connection: process.env.DATABASE_URL || {
      host: 'localhost',
      user: 'postgres',
      password: '12345',
      database: 'ing-web'
    },
  };
  