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

const run = async () => {
  const questions = [
    {
      type: "list",
      message: "Choose employee's role.",
      name: "role",
      choices: ["Manager", "Engineer", "Intern", "Exit"]
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

  const { role, name, id, email } = await inquirer.prompt(questions);
  await fs.writeFile(role, name, id, email);

  while (true) {
    const { repeat } = await inquirer.prompt([{ name: 'repeat', message: 'Would you like to add another team member?' }]);
    if (!repeat) {
      break;
    }
  }

}
run();







// let employees = [];

// async function addRole(role) {
//   let { name } = await inquirer.prompt(questions.item(role, "name", "full name"));
//   let { id } = await inquirer.prompt(questions.item(role, "id", "ID number"));
//   let { email } = await inquirer.prompt(questions.item(role, "email", "email address"));
//   switch (role) {
//     case "Manager":
//       let { officeNumber } = await inquirer.prompt(questions.item(role, "officeNumber", "office phone number"));
//       employees.push(new Manager(name, id, email, officeNumber));
//       break;
//     case "Engineer":
//       let { Github } = await inquirer.prompt(questions.item(role, "github", "GitHub username"));
//       employees.push(new Engineer(name, id, email, Github));
//       break;
//     case "Intern":
//       let { school } = await inquirer.prompt(questions.item(role, "school", "school"));
//       employees.push(new Intern(name, id, email, school));
//       break;
//   }
// }

// function getHtml(file) {
//   return readFile(file, "utf8");
// }

// async function generateHtml() {
//   let Template = {
//     Main: await getHtml("./templates/main.html"),
//     Manager: await getHtml("./templates/manager.html"),
//     Engineer: await getHtml("./templates/engineer.html"),
//     Intern: await getHtml("./templates/intern.html")
//   }

//   let employeesHTML = "";

//   for (let employee of employees) {
//     let html = Template[employee.constructor.name]
//       .replace(/{% name %}/gi, employee.name)
//       .replace(/{% id %}/gi, employee.id)
//       .replace(/{% email %}/gi, employee.email);
//     switch (employee.constructor.name) {
//       case "Manager":
//         html = html.replace(/{% officeNumber %}/gi, employee.officeNumber);
//         break;
//       case "Engineer":
//         html = html.replace(/{% github %}/gi, employee.github);
//         break;
//       case "Intern":
//         html = html.replace(/{% school %}/gi, employee.school);
//         break;
//     }
//     employeesHTML += html;
//   }
//   let completeHTML = Template["Main"].replace(/{% employees %}/gi, employeesHTML);

//   createHTML(completeHTML);
// }

// async function createHTML(html) {
//   console.log("Creating HTML...");
//   let file = `team-${timestamp()}.html`;
//   let dir = "./output";
//   if (!fs.existsSync(dir)) {
//     fs.mkdirSync(dir);
//   }
//   await writeFile(`${dir}/${file}`, html);
//   console.log(`HTML has been created to "${dir}/${file}".`);
//   return;
// }

// async function init() {
//   console.log("Please build your team");
//   await addRole("Manager");
//   let role = "";
//   let exit = "I don't want to add anymore team roles";
//   while (role != exit) {
//     let { role } = await inquirer.prompt(questions.type());
//     if (role === exit) {
//       return generateHtml();
//     }
//     await addRole(role);
//   }
// }

// init();


