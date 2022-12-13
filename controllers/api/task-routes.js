const router = require("express").Router();
const { Task, Comment, User } = require("../../models");

router.get("/", (req, res) => {
  Task.findAll().then((taskData) => {
    res.json(taskData);
  });
});

router.get("/:id", (req, res) => {
  Task.findOne({
    where: {
      id: req.params.id,
    },
  }).then((taskData) => {
    res.json(taskData);
  });
});

router.post("/", (req, res) => {
  // create a new task
  Task.create({
    id: req.body.id,
    title: req.body.title,
    description: req.body.description,
    deadline: req.body.deadline,
    user_id: req.body.user_id
  })
    .then((newTask) => {
      res.json(newTask);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
