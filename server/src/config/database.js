import mysql from 'mysql2';
import { config } from './envConfig.js';
import logger from './winstonLoggerConfig.js';

const connection = mysql.createPool({
  host: config.DB_HOST,
  user: config.DB_USERNAME,
  password: config.DB_PASSWORD,
  database: config.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

connection.getConnection((err, connection) => {
  if (err) {
    logger.error('Error connecting to database: ', err);
    return;
  }

  connection.query("SET time_zone = '+05:45'", (err) => {
    if (err) {
      logger.error('Error setting timezone: ', err);
    } else {
      logger.info('Database connected and timezone set successfully!!!');
    }
    connection.release();
  });
});

const con = connection.promise();

export default con;
