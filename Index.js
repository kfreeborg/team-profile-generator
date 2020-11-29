const inquirer = require('inquirer');
const fs = require('fs/promises');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let teamArray = [];

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
      message: "What is employee's name? (If exiting, click Enter.)",
      name: 'name'
    },
    {
      type: 'input',
      message: "What is employee's ID Number? (If exiting, click Enter.)",
      name: 'id'
    },
    {
      type: 'input',
      message: "What is employee's email? (If exiting, click Enter.)",
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

  // const teamArray = 4;
  let running = true;

  while (running) {
    const { name, id, email, role } = await runEmployee()

    if (role === "Manager") {
      const { officeNumber } = await runManager()
      const employee = new Manager(name, id, email, officeNumber, role);
      teamArray.push(employee);

    } else if (role === "Engineer") {
      const { Github } = await runEngineer()
      const employee = new Engineer(name, id, email, Github, role);
      teamArray.push(employee);

    } else if (role === "Intern") {
      const { school } = await runIntern()
      const employee = new Intern(name, id, email, school, role);
      teamArray.push(employee);
    } else {
      running = false;
    }
  }

  function displayTitle(employee) {
    if (employee.title === "Manager") {
      return `Office Number: ${employee.officeNumber}`;
    }

    if (employee.title === "Intern") {
      return `School: ${employee.school}`;
    }

    if (employee.title === "Engineer") {
      return `GitHub: <a href="https://github.com/${employee.Github}" target="_blank">${employee.Github}</a>`;
    }
  }

  function writeCard() {
    let html = "";
    for (j = 0; j < teamArray.length; j++) {
      html += `
    <div class="card m-3" style="width: 15rem;">
      <div class="card-body border border-dark">
        <div class="bg-warning text-dark">
          <h5 class="card-title p-2">${teamArray[j].name}</h5>
          <h6 class="card-subtitle p-2 mb-2">${teamArray[j].title}</h6>
        </div>
        <p class="card-text p-2">ID: ${teamArray[j].id}</p>
        <p class="card-text p-2">${displayTitle(teamArray[j])}</p>
        <p class="card-text p-2">Email: <a href="mailto:${teamArray[j].email}">${teamArray[j].email}</a></p>
      </div>
    </div> 
    `;
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
    <div class="container">
      <div class="row">
        ${writeCard()}
      </div>
    </div>
  </main>
</body>  
</html>
`;

  const fs = require("fs");
  fs.writeFile('index.html', html, function (err) {
    if (err) throw err;
    console.log('File is created successfully.');
  });
};

run();