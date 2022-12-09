const router = require("express").Router();
const userRoutes = require('../api/user-routes');

router.use('/users', userRoutes);

module.exports = router;
