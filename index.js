require('dotenv').config();
const config = require('./src/infrastructure/config');
const Server = require('./src/infrastructure/server');
const createMySqlConnection = require('./src/infrastructure/database/mysql');
const UserController = require('./src/interface/controllers/UserController');
const UserUsecase = require('./src/application/usecases/UserUsecase');
const UserRepository = require('./src/infrastructure/repository/UserRepository');

const connection = createMySqlConnection(config);
const server = new Server(config);
const router = server.express;

const userRepository = new UserRepository(connection);
const userUsecase = new UserUsecase(userRepository);
const userController = new UserController(router, userUsecase);
userController.router();

server.run();

// router.get('/api/users', async (req, res) => {
//   const results = await userUsecase.getAll().catch((err) => {
//     console.log(err);
//     res.send(err);
//     return;
//   });
//   res.json(results);
// });

// server.run();
