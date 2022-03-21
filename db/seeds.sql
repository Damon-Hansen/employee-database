INSERT INTO department
(name)
VALUES
('Lumberyard'),
('Sales'),
('Electrical'),
('Building Materials');

INSERT INTO role
(title, salary, department_id)
VALUES
('Forklift Driver', 30000, 1),
('Stocker', 15000, 1),
('ASST Manager' 40000, 1),
('Sales Associate', 10000, 2),
('Stocker', 12500, 3),
('Guest Services', 20000, 4);

INSERT INTO employee
(first_name, last_name, role_id, manager_id)
VALUES
('John', 'Doe', 3, NULL),
('Jane', 'Doe', 2, 1),
('Eric', 'No', 6, 1);