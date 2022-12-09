const router = require("express").Router();
const userRoutes = require("./user-routes");
const taskRoutes = require("./task-routes");
const commentRoutes = require("./comment-routes");

router.use("/users", userRoutes);
router.use("/tasks", taskRoutes);
router.use("/comments", commentRoutes);

module.exports = router;
