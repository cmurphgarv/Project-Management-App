const router = require("express").Router();
const { Task, Comment } = require("../models");

// GET all tasks for homepage
router.get("/", async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/login");
  } else {
    try {
      const dbTaskData = await Task.findAll({});

      const tasks = dbTaskData.map((task) => task.get({ plain: true }));

      res.render("homepage", {
        tasks,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

// GET one task
router.get("/task/:id", async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
    res.redirect("/login");
  } else {
    // If the user is logged in, allow them to view the gallery
    try {
      const dbTaskData = await Task.findByPk(req.params.id, {
        include: [
          {
            model: Task,
            attributes: ["id", "title", "description", "deadline", "user_id"],
          },
        ],
      });
      const task = dbTaskData.get({ plain: true });
      res.render("task", { task, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

// GET one comment
router.get("/comment/:id", async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
    res.redirect("/login");
  } else {
    // If the user is logged in, allow them to view the painting
    try {
      const dbCommentData = await Comment.findByPk(req.params.id);

      const comment = dbCommentData.get({ plain: true });

      res.render("comment", { comment, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
