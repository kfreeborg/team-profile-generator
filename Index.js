const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const html = require('./template/html');

class card {
  constructor() {
    this.employees = [];

    this.employeeQuestions = [
      {
        type: 'input',
        message: "What is employee's name?",
        name: 'name'
      },
      {
        type: 'input',
        message: "What is employee's ID Number?",
        name: 'id'
      },
      {
        type: 'input',
        message: "What is employee's email?",
        name: 'email'
      }
    ];
    this.managerQuestion = this.employeeQuestions.concat([
      {
        type: 'input',
        message: "What is manager's office number?",
        name: 'officeNumber'
      }
    ]);
    this.engineerQuestion = this.employeeQuestions.concat([
      {
        type: 'input',
        message: "What is employee's github username?",
        name: 'Github'
      }
    ]);
    this.internQuestion = this.employeeQuestions.concat([
      {
        type: 'input',
        message: "What is intern's school?",
        name: 'school'
      }
    ]);
    console.log(this);
  }
}
