const { Comment } = require("../models");

const commentData = [
  {
    content: "Ea nostrud aute consectetur tempor est occaecat ipsum sunt.",
    user_id: 1,
    task_id: 2,
  },
  {
    content: "Proident do tempor ut cillum qui et sint magna minim eu.",
    user_id: 1,
    task_id: 4,
  },
  {
    content: "Ex id do culpa consequat sunt voluptate.",
    user_id: 1,
    task_id: 6,
  },
  {
    content: "Ut sint laboris reprehenderit culpa commodo irure nisi eu.",
    user_id: 2,
    task_id: 3,
  },
  {
    content:
      "Voluptate labore proident deserunt quis dolor dolore laborum occaecat fugiat nostrud.",
    user_id: 2,
    task_id: 4,
  },
  {
    content:
      "Occaecat sit deserunt cupidatat irure ea aliquip exercitation sint.",
    user_id: 2,
    task_id: 1,
  },
  {
    content: "Labore cupidatat pariatur reprehenderit adipisicing.",
    user_id: 3,
    task_id: 5,
  },
  {
    content:
      "Dolor ullamco dolore nostrud exercitation nulla aliqua minim commodo nisi excepteur veniam.",
    user_id: 3,
    task_id: 4,
  },
  {
    content:
      "Aliqua laboris laboris veniam incididunt esse quis adipisicing nulla adipisicing nisi magna fugiat dolor esse.",
    user_id: 3,
    task_id: 8,
  },
  {
    content: "Exercitation enim id cillum excepteur.",
    user_id: 4,
    task_id: 7,
  },
  {
    content:
      "Est occaecat proident Lorem adipisicing est esse ullamco laboris anim amet sit eiusmod.",
    user_id: 4,
    task_id: 5,
  },
  {
    content:
      "Nostrud Lorem occaecat voluptate sint eu ut veniam minim laborum.",
    user_id: 4,
    task_id: 1,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
