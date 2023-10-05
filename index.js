const inquirer = require('inquirer');
const mysql2 = require('mysql2');
const { printTable } =  require('console-table-printer');
const { futimesSync } = require('fs');
const db = mysql2.createConnection({
    host: "localhost", 
    user: "root",
    password: "password",
    port: 3306,
    database: "employee_db",
})
db.connect(()=>{
    mainMenu()
})
function mainMenu(){
    // view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
    inquirer.prompt({
        type: "list",
        name: "mainMenu",
        choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role"],
        message: "choose one of the following options",
    })
    .then(response => {
        if(response.mainMenu === "view all departments"){
            viewDepartments()
        }else if(response.mainMenu === "view all roles"){
            viewRoles()
        }else if(response.mainMenu === "view all employees"){
            viewEmployees()
        }else if(response.mainMenu === "add a department"){
            addDepartment()
        }else if(response.mainMenu === "add a role"){
            addRole()
        }else if(response.mainMenu === "add employee"){
            addEmployee()
        }else if(response.mainMenu === "update an employee role"){
            updateEmployee()
        }
    })
}
function viewDepartments(){
    db.query("select * from department;",(err,data)=>{
        printTable(data)
        mainMenu()
    })
}
function viewRoles(){
    db.query("select * from role;", (err, data) =>{
        printTable(data)
        mainMenu()
    })
}
function viewEmployees(){
    db.query("select * from employee;", (err, data) =>{
        printTable(data)
        mainMenu()
    })
}
function addDepartment(){
    inquirer.prompt([
        {
            type: "input",
            message: "What is the new Department name?",
            name: "departmentName",
        }
    ]) 
    .then(response => {
        db.query("insert into department (name) values(?)",[response.departmentName], (err, data) =>{
            viewDepartments()
        }) 
    })
  
}
function addRole(){
    inquirer.prompt([
        {
            type: "input",
            message: "What is the name of the new Role?",
            name: "title",
        },
        {
            type: "input",
            message: "What is the Salary for this role?",
            name: "salary",
        },
        {
            type: "input",
            message: "what is the department id",
            name: "departmentId"
        }
    ]) 
     .then(response => {
         db.query("insert into role (title, salary, department_id) values(?, ?, ?)", [response.title, response.salary, response.departmentId], (err, data) =>{
             viewRoles()
         }) 
     })
}


function addEmployee(){
    inquirer.prompt([
        {
            type: "input",
            message: "What is the Employee first name?",
            name: "firstName",
        },
        {
            type: "input",
            message: "What is the Employee last name?",
            name: "lastName",
        },
        {
            type: "input",
            message: "What is the role ID?",
            name: "roleId"
        },
    ]) 
    .then(response => {
        db.query("insert into role (first_name, last_name, role_id) values(?, ?, ?)", [response.firstName, response.lastName, response.roleId], (err, data) =>{
            viewEmployee()
        }) 
    })
}
function updateEmployee(){

}