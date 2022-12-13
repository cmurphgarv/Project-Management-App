const router = require("express").Router();
const { Task, Comment, User } = require("../../models");

// GET all tasks
router.get("/", async (req, res) => {
  try {
    const userData = await Task.findAll({
      include: [{ model: User }, { model: Comment }],
    });
    res.status(200).json(userData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one task by ID
router.get("/:id", async (req, res) => {
  try {
    const userData = await Task.findByPk(req.params.id, {
      include: [{ model: User }, { model: Comment }],
    });

    if (!userData) {
      res.status(404).json({ message: "No user found with that id!" });
      return;
    }

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE new task
router.post("/", async (req, res) => {
  try {
    const dbTaskData = await Task.create({
      title: req.body.title,
      title: req.body.title,
      description: req.body.description,
      deadline: req.body.deadline,
      user_id: req.body.user_id,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
