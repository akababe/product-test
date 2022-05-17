const router = require ("express").Router()

const homepage = (req, res) => {
    res.json ({
        msg : "api sudah jalan di home page"
    })
}

router.get("/", homepage)


module.exports = router