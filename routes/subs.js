const express = require('express');
const UserService = require('../services/user_service');
const SubService = require('../services/sub_service');

const router = express.Router();

router.route('/')
  .get((req, res) => {
    (async () => {
      const subs = await SubService.list();
      res.json(subs);
    })()
      .then((r) => {
        console.log(r);
      })
      .catch((e) => {
        console.log(e);
      });
  })

router.route('/:userId')
  .post((req, res, next) => {
    (async () => {
      const { userId } = req.params;
      const { url } = req.body;
      const user = await UserService.getUserById(userId);
      if (!user) throw Error('No such user');
      const sub = await SubService.createSucscription(userId, url);
      res.json(sub);

    })()
      .then((r) => {
        console.log(r);
      })
      .catch((e) => {
        console.log(e);
      });
  })
  .get((req, res) => {
    (async () => {
      const { userId } = req.params;
      const user = await UserService.getUserById(userId);
      if (!user) throw Error('No such user');
      const sub = await SubService.findOneById(userId);
      res.json(sub);
    })()
      .then((r) => {
        console.log(r);
      })
      .catch((e) => {
        console.log(e);
      });
  });

module.exports = router;
