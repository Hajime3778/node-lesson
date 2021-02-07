require('dotenv').config();
const config = require('./src/infrastructure/config');
const Server = require('./src/infrastructure/server');
const createMySqlConnection = require('./src/infrastructure/database/mysql');
const UserController = require('./src/interface/controllers/UserController');
const UserUsecase = require('./src/application/usecases/UserUsecase');
const UserRepository = require('./src/infrastructure/repository/UserRepository');

const connection = createMySqlConnection(config);
const server = new Server(config);
const express = server.express;

// Users API
const userRepository = new UserRepository(connection);
const userUsecase = new UserUsecase(userRepository);
const userController = new UserController(userUsecase);
express.use('/api/', userController.router);

server.run();
