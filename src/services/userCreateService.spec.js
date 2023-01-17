const UserCreateService = require('./UserCreateService');
const UserCreateService = require('./UserCreateService');

it('user should be create', () => {
  const user = {
    name: 'User test',
    email: 'user@test.com',
    password: '123',
  };

  const userCreateService = new UserCreateService();

  const userCreated = userCreateService.execute(user);

  expect(userCreated).toHaveProperty('id');
});
