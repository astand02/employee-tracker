INSERT INTO department (name)
VALUES ("Sales"),
       ("Enginering"),
       ("Finance"),
       ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES ( "Sales Lead", 100000, 1),
       ( "Salesperson", 80000, 1),
       ( "Lead Engineer", 150000, 2),
       ( "Software Engineer", 120000, 2),
       ( "Account Manager", 160000, 3),
       ( "Accountant", 125000, 3),
       ( "Legal Team Lead", 250000, 4),
       ( "Lawyer", 190000, 4);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ( "John", "Doe", 1),
       ( "Mike", "Chan", 1),
       ( "Ashley", "Rodriguez", 2),
       ( "Kevin", "Tupik", 2),
       ( "Kunal", "Singh", 3),
       ( "Malia", "Brown", 3),
       ( "Sarah", "Lourd", 4),
       ( "Tom", "Allen", 4);

UPDATE employee SET manager_id = 1 where id = 2;
UPDATE employee SET manager_id = 3 where id = 4;
UPDATE employee SET manager_id = 5 where id = 6;
UPDATE employee SET manager_id = 7 where id = 8;


       
