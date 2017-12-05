const express = require('express');

const router = express.Router();

const UserService = require('../services/user_service');
const HTTPRequestParamError = require('../errors/http_request_param_error');

/* GET users listing. */

router.route('/')
  .get((req, res, next) => {
    (async () => {
      throw new HTTPRequestParamError('page', '请指定页码', 'page can not be empty');
      const users = await UserService.getAllUsers();
      return users;
    })()
      .then((r) => {
        res.json(r);
      })
      .catch((e) => {
        next(e);
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
