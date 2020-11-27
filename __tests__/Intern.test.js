const Intern = require('../lib/Intern');

test('school', () => {
  const school = 'school';
  const employee = new Intern('name', 100, 'test@test.com', school);

  expect(employee.school).toBe(school);
});

test('getRole()', () => {
  const role = 'Intern';
  const employee = new Intern('name', 100, 'test@test.com', 'school');

  expect(employee.getRole()).toBe(role);
});

test('get getSchool()', () => {
  const school = 'school';
  const employee = new Intern('name', 100, 'test@test.com', school);

  expect(employee.getSchool()).toBe(school);
});