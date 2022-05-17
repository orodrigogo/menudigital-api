module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./src/database/database.db",
    },
    migrations: {
      directory: "./src/database/migrations"
    },
    useNullAsDefault: true
  },
};
