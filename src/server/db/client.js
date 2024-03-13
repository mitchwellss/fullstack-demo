const { Client } = require("pg");
const connectionString = "postgres://localhost:5432/goodie-bag";

const db = new Client({ connectionString });

module.exports = db;
