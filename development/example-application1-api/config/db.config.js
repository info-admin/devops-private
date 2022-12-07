module.exports = { 
  HOST: "172.17.0.1",
  USER: "sa",
  PASSWORD: "testsql**2022--",
  DB: "db_test",
  dialect: "mssql",
  timezone: "+01:00",
  dialectOptions: {
    useUTC: false, //for reading from database
    dateStrings: false,
    timezone: "+01:00", 
  },

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
