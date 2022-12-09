const Comment = require("./Comment");
const Task = require("./Task");
const User = require("./User");

User.hasMany(Task, {
  foreignKey: "user_id",
});

Task.belongsTo(User, {
  foreignKey: "user_id",
});

Task.hasMany(Comment, {
  foreignKey: "task_id",
});

Comment.belongsTo(Task, {
  foreignKey: "task_id",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Task, Comment };
