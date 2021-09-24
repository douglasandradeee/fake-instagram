module.exports = {
  development: {
    username: "root",
    password: null,
    database: "fake_instagram",
    host: "localhost",
    dialect: "mysql",
    port: 8306,
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql"
  }
}
