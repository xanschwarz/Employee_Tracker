/*
On start the following options are presented: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role.

All departments presents a formatted table showing department names and department ids.

All roles presents the job title, role id, the department that role belongs to, and the salary for that role.

All employees presents with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to.

Add a department prompts to enter the name of the department and that department is added to the database.

Add a role prompts to enter the name, salary, and department for the role and that role is added to the database.

Add an employee prompts to enter the employee’s first name, last name, role, and manager, and that employee is added to the database.

Update an employee role prompts to select an employee to update and their new role and this information is updated in the database.

Eliminate superfluous console.logs.
*/

const inquirer = require('inquirer');
const consoleTable = require('console.table');
const connection = require('./config/connection');

// Initial prompt questions. Add department prompt questions. Add role prompt questions. Add employee prompt questions.
// Update employee questions to be addressed later.

const initialChoices = [{
    type: 'list',
    name: 'initialSelect',
    message: "Please choose what you'd like to do from the following options:",
    choices: [
    'View All Employees',
    'Add Employee',
    'Update Employee Role',
    'View All Roles',
    'Add Role',
    'View All Departments',
    'Add Department',
    'Quit'
    ]
}];

const departmentQuestion = [{
    type: 'input',
    name: 'department',
    message: 'Please enter the name of the new department:'
}];

// Add a role prompts to enter the name, salary, and department for the role and that role is added to the database.
const roleQuestions = [{
    type: 'input',
    name: 'name',
    message: 'Please enter the name of the new role:'
},
{
    type: 'input',
    name: 'salary',
    message: 'Please enter the salary of this role:'
},
{
    type: 'input',
    name: 'department',
    message: 'Please enter the department this role belongs to:'
}];

// Add an employee prompts to enter the employee’s first name, last name, role, and manager, and that employee is added to the database.
const employeeQuestions = [{
    type: 'input',
    name: 'firstName',
    message: "Please enter the new employee's first name:"
},
{
    type: 'input',
    name: 'lastName',
    message: "Please enter the new employee's last name:"
},
{
    type: 'input',
    name: 'role',
    message: "Please enter the employee's role:"
},
{
    type: 'input',
    name: 'manager',
    message: "Please enter the employee's manager:"
}];

const init = () => {
    inquirer.prompt(initialChoices)
    .then(function (response) {
        switch (response.initialSelect) {
            case 'View All Employees':
                viewEmployees();
                break;
            case 'Add Employee':
                addEmployee();
                break;
            case 'Update Employee Role':
                updateEmployee();
                break;
            case 'View All Roles':
                viewRoles();
                break;
            case 'Add Role':
                addRole();
                break;
            case 'View All Departments':
                viewDepartments();
                break;
            case 'Add Department':
                addDepartment();
                break;
            case 'Quit':
                connection.end();
                break;
            default:
                connection.end();
        }
    })
}

const viewDepartments = () => {
    connection.query(
        "SELECT * FROM department",
        function (err, res) {
            if (err) throw err;
            console.table(res);
            init();
        }
    )
}

const viewRoles = () => {
    // code
}

const viewEmployees = () => {
    // code
}

const addDepartment = () => {
    // code
}

const addRole = () => {
    // code
}

const addEmployee = () => {
    // code
}

const updateEmployee = () => {
    // code
}




init();