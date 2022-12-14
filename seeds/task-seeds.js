const Task = require('../models/Task');
const { addDays } = require('../utils/helpers');

const taskData = [
    {
        title: 'Add report feature',
        description:'Create new feature to generate statistical report on productivity for work site',
        deadline: '01/30/2023',
        user_id: 1,
    },
    {
        title: 'Bug fix',
        description:'User reported they are unable to login at 3pm every day. Investigate and resolve',
        deadline: '12/30/2022',
        user_id: 1,
    },
    {
        title: 'Add report type drop down menu',
        description:'Add drop down to new app page for users to select report types',
        deadline: '01/05/2023',
        user_id: 2,
    },
    {
        title: 'Onboard new client',
        description: 'Fill in all client info and create new account',
        deadline: '01/03/2023',
        user_id: 2,
    },
    {
        title: 'Generate productivity report',
        description: 'Combine relevant data and create report for client',
        deadline: '12/15/2022',
        user_id: 3,
    },
    {
        title: 'Code new graphics',
        description: 'Add pie chart to client report',
        deadline: '12/12/2022',
        user_id: 3,
    },
    {
        title: 'Remove extra column',
        description: 'Remove code for blank column at the end of spreadsheet',
        deadline: '01/01/2023',
        user_id: 4,
    },
    {
        title: 'Add new category for data entry',
        description: 'Add new category for construction sites',
        deadline: '12/30/2022',
        user_id: 4,
    }
];

const seedTasks = () => Task.bulkCreate(taskData);

module.exports = seedTasks;