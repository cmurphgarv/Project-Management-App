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

//I got to here, the post route for this needs updated/fixed.
router.post("/", (req, res) => {
  Task.create(req.body)
    .then((task) => {
      if (req.body.taskId.length) {
        const productTagIdArr = req.body.tagIds.map((tag_id) => {
          return {
            product_id: product.id,
            tag_id,
          };
        });
        return ProductTag.bulkCreate(productTagIdArr);
      }
      // if no product tags, just respond
      res.status(200).json(product);
    })
    .then((productTagIds) => res.status(200).json(productTagIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

module.exports = router;
