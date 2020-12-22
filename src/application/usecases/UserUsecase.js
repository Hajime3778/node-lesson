const { v4: uuidv4 } = require('uuid');
const User = require('../../domain/User');

class UserUsecase {
  constructor(userRepository){
    this.userRepository = userRepository;
  }

  async getAll() {
    return await this.userRepository.getAll();
  }

  async get(id) {
    return await this.userRepository.get(id);
  }

  async create(userObj) {
    const user = new User(uuidv4(), userObj.name, userObj.email, userObj.description);
    return await this.userRepository.create(user);
  }

  async update(userObj) {
    const user = new User(userObj.id, userObj.name, userObj.email, userObj.description);
    return await this.userRepository.create(user);
  }

  async delete(id) {
    return await this.userRepository.delete(id);
  }
}

module.exports = UserUsecase;