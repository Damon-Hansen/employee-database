const db = require('./db/connection');
const inquirer = require('inquirer');

const mainMenu = () => {
    inquirer.prompt ([{
        type: 'list',
        name: 'userChoice',
        message: 'Select One',
        choices: ['Add a Department', 'View Department', 'Add a Role', 'View a Role', 'Add a Employee', 'View an Employee', 'Update Employee Role', 'Exit Menu']

    }]).then((answer)=>{
         switch (answer.userChoice) {
             case "Add a Department":
                 //code to add department
                 break;
            case "View Department":
                //code to view department
                viewDepartment();
                break;
            case "Add a Role":

                break;
            case "View a Role":

                break;
            case "Add a Employee":

                break;
            case "View an Employee":
                viewEmployee();
                break;
            case "Update Employee Role":

                break;
            case "Exit Menu":
                process.exit(0);
         }
    })
}

const viewDepartment = () => {
    const sql = 'SELECT * FROM department';
    db.promise().query(sql).then((returnedDepartment)=> {
        console.table(returnedDepartment[0]);
        mainMenu();
    })
};

const viewEmployee = () => {
    const sql = 'SELECT employee.first_name, employee.last_name, role.title, role.salary, department.name, manager.last_name AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON employee.manager_id = manager.id';
    db.promise().query(sql).then((viewEmployee)=> {
        console.table(viewEmployee[0]);
        mainMenu();
    })
};

const updateEmployeeRole = () => {
    const sqlEmployee = 'SELECT employee.id AS value, employee.last_name AS name FROM employee';
    const sqlRole = 'SELECT role.id AS value, role.title AS name from role';
    db.promise().query(sqlEmployee)
    .then((employeeList)=> {
        return employeeList[0];
    }).then((employeeList)=>{
        db.promise().query(sqlRole)
        .then((roleList)=> {
            return roleList[0]
        }).then((roleList)=> {
            inquirer.prompt([{
                type: 'list',
                name: 'employee',
                message: 'Choose the Employee',
                choices: employeeList
            },
            {
                type: 'list',
                name: 'role',
                message: 'Choose the Role',
                choices: roleList
            }
        ])
        .then((updateEmp))
        })
    })
}

mainMenu();
