const router = require ("express").Router()
const crud = require("../controller/crud");

router.get("/getProducts", crud.getDatas);


module.exports = router;