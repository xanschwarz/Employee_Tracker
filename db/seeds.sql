INSERT INTO department (name)
VALUE ("Engineering");
INSERT INTO department (name)
VALUE ("Finance");
INSERT INTO department (name)
VALUE ("Legal");
INSERT INTO department (name)
VALUE ("Sales");

INSERT INTO role (title, salary, department_id)
VALUE ("Sales Lead", 100000, 4);
INSERT INTO role (title, salary, department_id)
VALUE ("Salesperson", 80000, 4);
INSERT INTO role (title, salary, department_id)
VALUE ("Lead Engineer", 150000, 1);
INSERT INTO role (title, salary, department_id)
VALUE ("Software Engineer", 120000, 1);
INSERT INTO role (title, salary, department_id)
VALUE ("Account Manager", 160000, 2);
INSERT INTO role (title, salary, department_id)
VALUE ("Accountant", 125000, 2);
INSERT INTO role (title, salary, department_id)
VALUE ("Legal Team Lead", 250000, 3);
INSERT INTO role (title, salary, department_id)
VALUE ("Lawyer", 190000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ("John", "Doe", 1, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ("Mike", "Chan", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ("Ashley", "Rodriguez", 3, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ("Kevin", "Tupik", 4, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ("Kunal", "Singh", 5, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ("Malia", "Brown", 6, 5);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ("Sarah", "Lourd", 7, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ("Tom", "Allen", 8, 7);