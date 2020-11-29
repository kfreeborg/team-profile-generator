const inquirer = require('inquirer');
const fs = require('fs/promises');
// const util = require('util');

// const readFile = util.promisify(fs.readFile);
// const writeFile = util.promisify(fs.writeFile);

//const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./utils/generatePage.js');

function runEmployee() {
  const questions = [
    {
      type: 'list',
      message: "Choose employee's role.",
      name: 'role',
      choices: ['Manager', 'Engineer', 'Intern', 'Exit']
    },
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

  return inquirer.prompt(questions);
};

function runManager() {
  const questions = [{
    type: 'input',
    message: "What is manager's office number?",
    name: 'officeNumber'
  }];

  return inquirer
    .prompt(questions);
};

function runEngineer() {
  const questions = [{
    type: 'input',
    message: "What is Engineer's Github?",
    name: 'Github'
  }];

  return inquirer
    .prompt(questions);
};

function runIntern() {
  const questions = [{
    type: 'input',
    message: "What school does intern attend?",
    name: 'school'
  }];

  return inquirer
    .prompt(questions);
};

async function run() {

  let employeeArray = [];
  const maxTimes = 4;
  for (i = 0; i < maxTimes; i++) {
    const promise = new Promise((resolve, reject) => {
      runEmployee()
        .then(function ({ name, id, email, role }) {

          if (role === "Manager") {
            runManager().then(function ({ officeNumber }) {
              this.employee = new Manager(name, id, email, officeNumber, role);
              console.log(officeNumber);
              employeeArray.push(employee);
              resolve("done");
            });

          } else if (role === "Engineer") {
            runEngineer().then(function ({ Github }) {
              this.employee = new Engineer(name, id, email, Github, role);
              console.log(Github);
              employeeArray.push(employee);
              resolve("done");
            });
          } else if (role === "Intern") {
            runIntern().then(function ({ school }) {
              this.employee = new Intern(name, id, email, school, role);
              console.log(school);
              employeeArray.push(employee);
              resolve("done");
            });
          }

        }).catch(function (err) {
          console.log("There was an error.");
          console.error(err);
        });
    });

    const result = await promise;
    console.log(result);
  }

  // console.log(employeeArray.length);

  function displayTitle(employee) {
    if (employee.title === "Manager") {
      console.log(employee.officeNumber);
      return `office number: ${employee.officeNumber}`;
    }

    if (employee.title === "Intern") {
      return `school: ${employee.school}`;
    }

    if (employee.title === "Engineer") {
      return `GitHub: ${employee.Github}`;
    }

  }
  function getCardHtml() {
    let html = "";
    for (j = 0; j < maxTimes; j++) {
      console.log(employeeArray[j])
      html += `<div class="card m-3" style="width: 15rem;">
            <div class="card-body border border-dark">
              <div class="bg-warning text-dark">
                <h5 class="card-title">${employeeArray[j].name}</h5>
                <h6 class="card-subtitle mb-2">${employeeArray[j].title}</h6>
              </div>
              <p class="card-text">ID: ${employeeArray[j].id}</p>
              <p class="card-text">${displayTitle(employeeArray[j])}</p>
              <p class="card-text">Email: ${employeeArray[j].email}</p>
            </div>
          </div> `;
    }
    return html;
  }

  let html = `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Team Profile</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
    integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
</head>

<body>
  <header>
    <nav class="navbar navbar-light bg-dark">
      <span class="mb-0 text-light h1 mx-auto">Meet the Team</span>
    </nav>
  </header>
  <main>
    <div class="container-fluid">
      <div class="row">
        ${getCardHtml()}
        </div>
      </div>
    </div>
  </main>
</body>
    
</html>
    `;




  console.log(html);
  const fs = require("fs");
  fs.writeFile('index.html', html, function (err) {
    if (err) throw err;
    console.log('File is created successfully.');
  });
}


run();
