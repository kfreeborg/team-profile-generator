const inquirer = require('inquirer');
const fs = require('fs');

//const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const html = require('./template/html');










// class card {
//   constructor() {
//     this.employees = [];

//     this.employeeQuestions = [
//       {
//         type: 'input',
//         message: "What is employee's name?",
//         name: 'name'
//       },
//       {
//         type: 'input',
//         message: "What is employee's ID Number?",
//         name: 'id'
//       },
//       {
//         type: 'input',
//         message: "What is employee's email?",
//         name: 'email'
//       }
//     ];
//     this.managerQuestion = this.employeeQuestions.concat([
//       {
//         type: 'input',
//         message: "What is manager's office number?",
//         name: 'officeNumber'
//       }
//     ]);
//     this.engineerQuestion = this.employeeQuestions.concat([
//       {
//         type: 'input',
//         message: "What is employee's github username?",
//         name: 'Github'
//       }
//     ]);
//     this.internQuestion = this.employeeQuestions.concat([
//       {
//         type: 'input',
//         message: "What is intern's school?",
//         name: 'school'
//       }
//     ]);
//   }
//   start() {
//     console.log('started');
//     this.next();
//   }
//   end() {
//     console.log('HTML page created!')
//   }

//   // employee questions
//   next() {
//     this.promptRole().then((role) => {
//       if (role === 'Exit') {
//         this.generateHtml();
//         this.end();
//       } else {
//         this.promptInfo(role).then((data) => {
//           switch (role) {
//             case 'Manager':
//               this.employees.push(new Manager(data.name, data.id, data.email, data.officeNumber));
//               break;
//             case 'Engineer':
//               this.employees.push(new Engineer(data.name, data.id, data.email, data.github));
//               break;
//             case "Intern":
//               this.employees.push(new Intern(data.name, data.id, data.email, data.school));
//               break;
//           }
//           this.next();
//         });
//       }
//     });
//   }

//   promptRole() {
//     return inquirer.prompt([
//       {
//         type: "list",
//         message: "Enter your role",
//         name: "role",
//         choices: ["Manager", "Engineer", "Intern", "Exit"]
//       }
//     ]).then(function (data) {
//       return (data.role);
//     }).catch(function (error) {
//       console.log(error);
//     });
//   }



// }

// var x = new card();
// x.start();
