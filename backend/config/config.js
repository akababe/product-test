const {Client} = require('pg')

const pool = new Client({
  host: 'localhost',
  user: 'postgres',
  database: 'dbtest',
  password: 'akaarinda',
  port: '5432',
    // ssl : {rejectUnauthorized:false},
})

// fungsi ini akan dipanggil ketika memulai koneksi ke database
const connect = async () => {
    return pool.connect();
  };
  
  // fungsi ini akan dipanggil oleh fungsi yg membutuhkan koneksi ke database
  const getConnection = () => {
    return pool;
  } 
  
module.exports = {

connect,
getConnection,

}