const router = require ("express").Router()
const crud = require("./crud")


const homepage = (req, res) => {
    res.json ({
        msg : "api sudah jalan di home page"
    })
}

router.get("/", homepage)
router.use("/api", crud)


module.exports = router