import db from "../sequelize/models/index";
import express from 'express';
const router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
  //res.send('respond with a resource');
  const users = await db.User.findAll();
  res.json( users );
});

// module.exports = router;
export default router;