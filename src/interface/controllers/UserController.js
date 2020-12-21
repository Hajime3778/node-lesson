class UserController {
  constructor(express, userUsecase){
    this.router = express;
    this.userUsecase = userUsecase;
  }

  router() {
    this.router.get('/api/users', this.getAll);
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
}

module.exports = UserController;