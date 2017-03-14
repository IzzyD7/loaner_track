// Sets configuration for app

const config = {
  appName: 'Loaner Tracker',
  port: 8080,
  db: {
    host: 'localhost',
    dbName: 'loanerPool'
  }
};

//exports CONFIG as a module to be used be other files.
module.exports = config;
