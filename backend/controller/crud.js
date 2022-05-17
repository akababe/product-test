const db = require('../config/config').getConnection();

const getDatas = (req, res) => {
    db.query('SELECT * FROM product', (error, results) => {
      if (error) {
        throw res.status(400).json(error)
      }
      res.status(200).json(results.rows)
    })
}

module.exports = {
    getDatas
}