module.exports = {
    client: 'pg',
    connection: process.env.DATABASE_URL || {
      host: 'dpg-cqc9pkuehbks738bkfs0-a.oregon-postgres.render.com',
      user: 'fpalan95',
      password: '9e0xEHZBzCMMsZRYkwlxN4XbDEvACp0z',
      database: 'ingweb'
    },
  };
  