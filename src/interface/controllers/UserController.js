class UserController {
  constructor(express, userUsecase){
    this.express = express;
    this.userUsecase = userUsecase;
  }

  router() {
    this.express.get('/api/users', async (req, res) => 
      await this.getAll(req, res)
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
}

module.exports = UserController;