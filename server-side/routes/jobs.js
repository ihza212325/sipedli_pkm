const express = require("express");
const JobController = require("../controllers/jobController");
const auth = require("../middlewares/authentication");
const authorizationMovie = require("../middlewares/authorization");
const authorizationMovieEdit = require("../middlewares/authorizationEdit");
// const app = express();
const router = express.Router();

router.use(auth);
router.get("/", JobController.readJobs);
router.post("/", JobController.createJobs);
router.patch("/:id", authorizationMovie, JobController.patchStatus);
router.get("/:id", JobController.readJobId);
router.put("/:id", authorizationMovieEdit, JobController.updateMovieByid);
// router.use ( authorizationMovie )
// router.delete("/:id", authorizationMovie, MovieController.deleteId);

module.exports = router;
