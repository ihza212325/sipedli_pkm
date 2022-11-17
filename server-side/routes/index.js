const express = require("express");
const router = express.Router();
const routerJobs = require("./jobs");
const routerUser = require("./user");
const routerCompany = require("./company");
// const routerHistory = require("./history");
const routerClient = require("./client");

router.use("/users", routerUser);
router.use("/pub", routerClient);

router.use("/jobs", routerJobs);
router.use("/company", routerCompany);
// router.use("/histories", routerHistory);

module.exports = router;
