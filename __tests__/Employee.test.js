const Employee = require('../lib/Employee.js');

test('constructor', () => {
  const name = 'name';
  const id = 100;
  const email = 'test@test.com';
  const employee = new Employee(name, id, email);

  expect(employee.name).toBe(name);
  expect(employee.id).toBe(id);
  expect(employee.email).toBe(email);
});

test('getName()', () => {
  const name = 'name';
  const employee = new Employee(name);

  expect(employee.getName()).toBe(name);
});

test('getId()', () => {
  const id = 100;
  const employee = new Employee('name', id);

  expect(employee.getId()).toBe(id);
});

test('getEmail()', () => {
  const email = 'test@test.com';
  const employee = new Employee('name', 100, email);

  expect(employee.getEmail()).toBe(email);
});

test('getRole()', () => {
  const role = 'Employee';
  const employee = new Employee('name', 100, 'test@test.com');

  expect(employee.getRole()).toBe(role);
});