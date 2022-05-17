module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/database.db',
    },
    useNullAsDefault: true
  },
};
