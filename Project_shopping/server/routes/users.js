const router = require('express').Router();
let User = require('../models/User');

// 사용자 목록 가져오기

// 사용자 목록 가져오기
router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

// 사용자 추가
router.route('/add').post((req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const passwordHash = req.body.passwordHash;

  const newUser = new User({ username, email, passwordHash });

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;