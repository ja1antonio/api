const { hash } = require('bcryptjs');
const AppError = require('../utils/AppError');

class UserCreateService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute({ name, email, password }) {
    const checkUserExists = await this.userRepository.findByEmail(email);

    if (checkUserExists) {
      throw new AppError('Este e-mail ja está em uso.');
    }

    const hashPassword = await hash(password, 8);

    const userCreated = await this.userRepository.create({
      name,
      email,
      password: hashPassword,
    });
    return userCreated;
  }
}
module.exports = UserCreateService;
