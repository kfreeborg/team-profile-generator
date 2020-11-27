const Manager = require('../lib/Manager');

test('officeNumber', () => {
  const officeNumber = 100;
  const employee = new Manager('name', 100, 'test@test.com', officeNumber);

  expect(employee.officeNumber).toBe(officeNumber);
});

test('getRole()', () => {
  const role = 'Manager';
  const employee = new Manager('name', 100, 'test@test.com', 100);

  expect(employee.getRole()).toBe(role);
});

test('get officeNumber()', () => {
  const officeNumber = 100;
  const employee = new Manager('name', 100, 'test@test.com', officeNumber);

  expect(employee.getOfficeNumber()).toBe(officeNumber);
});