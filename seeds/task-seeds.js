const Task = require('../models/Task');

const taskData = {
    {
        title: '',
        description:'',
        deadline: ,
        user_id: ,
    },
    {
        title: '',
        description:'',
        deadline: ,
        user_id: ,
    },
    {
        title: '',
        description:'',
        deadline: ,
        user_id: ,
    },
    {
        title: '',
        description:'',
        deadline: ,
        user_id: ,
    },
    {
        title: '',
        description:'',
        deadline: ,
        user_id: ,
    },
    {
        title: '',
        description:'',
        deadline: ,
        user_id: ,
    },
    {
        title: '',
        description:'',
        deadline: ,
        user_id: ,
    },
    {
        title: '',
        description:'',
        deadline: ,
        user_id: ,
    }
};

const seedTasks = () => Task.bulkCreate(taskData);

module.exports = seedTasks;