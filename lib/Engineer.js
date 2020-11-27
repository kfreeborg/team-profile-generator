const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, id, email, Github) {
    super(name, id, email);
    this.Github = Github;
    this.title = "Engineer";
  }

  getRole() {
    return this.title;
  }

  getGithub() {
    return this.Github;
  }

}

module.exports = Engineer;