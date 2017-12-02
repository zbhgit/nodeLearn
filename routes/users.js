const express = require('express');

const router = express.Router();

const UserService = require('../services/user_service');

/* GET users listing. */

router.route('/')
  .get((req, res) => {
    (async () => {
      const users = await UserService.getAllUsers();
      res.json(users);
    })()
      .then((r) => {
        console.log(r);
      })
      .catch((e) => {
        console.log(e);
      });
  })
  .post((req, res) => {
    (async () => {
      const { name, age } = req.body;
      const u = await UserService.addNewUser(name, age);
      res.json(u);
    })()
      .then((r) => {
        console.log(r);
      })
      .catch((e) => {
        console.log(e);
      });
  });

router.route('/:userId')
  .get((req, res) => {
    (async () => {
      const { userId } = req.params;
      const user = await UserService.getUserById(userId);
      res.json(user);
    })()
      .then((r) => {
        console.log(r);
      })
      .catch((e) => {
        console.log(e);
      });
  });


module.exports = router;
