const { Router } = require('express');
class UserController {
  constructor(userUsecase){
    this.userUsecase = userUsecase;
    this.router = Router();

    this.router.get('/users', async (req, res) => 
      await this.getAll(req, res)
    );

    this.router.get('/users/:id', async (req, res) => 
      await this.get(req, res)
    );
  }

  async getAll(req, res) {
    const results = await this.userUsecase.getAll()
      .catch((err) => {
        console.log(err);
        res.send(err);
        return;
      });
    res.json(results);
  }

  async get(req, res) {
    const results = await this.userUsecase.get(req.params.id)
      .catch((err) => {
        console.log(err);
        res.send(err);
        return;
      });
    res.json(results);
  }
}

module.exports = UserController;