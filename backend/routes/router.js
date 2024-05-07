const router = require("express").Router();

//Services router

const servicesRouter = require("./service");

router.use("/", servicesRouter);

//PArtyk
const partyRouter = require("./parties");

router.use("/", partyRouter)

module.exports = router;
