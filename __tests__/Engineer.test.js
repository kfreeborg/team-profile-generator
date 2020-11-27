const Engineer = require('../lib/Engineer');

test('Github', () => {
  const Github = 'Github';
  const employee = new Engineer('name', 100, 'test@test.com', Github);

  expect(employee.Github).toBe(Github);
});

test('getRole()', () => {
  const role = 'Engineer';
  const employee = new Engineer('name', 100, 'test@test.com', 'Github');

  expect(employee.getRole()).toBe(role);
});

test('get gitGithub()', () => {
  const Github = 'Github';
  const employee = new Engineer('name', 100, 'test@test.com', Github);

  expect(employee.getGithub()).toBe(Github);
});