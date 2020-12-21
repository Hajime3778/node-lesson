class UserUsecase {
  constructor(userRepository){
    this.userRepository = userRepository;
  }

  async getAll () {
    return this.userRepository.getAll();
  }
}

module.exports = UserUsecase;