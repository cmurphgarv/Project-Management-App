const router = require("express").Router();
const { Task, Comment, User } = require("../models");
const moment = require("moment");

// GET all tasks for homepage
router.get("/", async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/login");
  } else {
    try {
      // const dbTaskData = await Task.findAll({
      //   include: { model: User },
      //   where: {
      //     user_id: req.session.user_id,
      //   },
      // });

      const dbTaskData = await Task.findAll({
        include: { model: User },
      });

      let tasks = dbTaskData.map((task) => task.get({ plain: true }));
      tasks = tasks.map((task) => {
        task.deadline = moment(task.deadline).format("MMM Do YY");
        return task;
      });
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

// Get all comments with associated task

router.get("/comment/:id", async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
    res.redirect("/login");
  } else {
    // If the user is logged in, allow them to view the comment
    try {
      const dbCommentData = await Comment.findByPk(req.params.id);
      const comment = dbCommentData.get({ plain: true });

      const dbAllCommentsData = await Comment.findAll({
        where: {
          task_id: comment.task_id,
        },
      });

      const comments = dbAllCommentsData.map((comment) =>
        comment.get({ plain: true })
      );

      res.render("comment", {
        comments,
        loggedIn: req.session.loggedIn,
        user_id: req.session.user_id,
        task_id: comment.task_id,
      });
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

router.get("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.render("login");
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
