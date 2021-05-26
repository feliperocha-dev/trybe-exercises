CREATE DATABASE IF NOT EXISTS Zoo;

USE Zoo;

CREATE TABLE managers(
	manager_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    manager_name VARCHAR(100) NOT NULL
);

CREATE TABLE locations(
	localization_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    localization_name VARCHAR(100) NOT NULL
);

CREATE TABLE species(
	species_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    species_name VARCHAR(100) NOT NULL
);

CREATE TABLE employees(
	employee_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    employee_name VARCHAR(100) NOT NULL,
    manager_id INT NOT NULL,
    FOREIGN KEY (manager_id) REFERENCES managers (manager_id)
);

CREATE TABLE animals(
	animal_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    animal_name VARCHAR(100) NOT NULL,
    species_id INT NOT NULL,
	sex VARCHAR(100) NOT NULL,
	age INT NOT NULL,
	employee_id INT NOT NULL,
	localization_id INT NOT NULL,
    FOREIGN KEY (species_id) REFERENCES species (species_id),
    FOREIGN KEY (employee_id) REFERENCES employees (employee_id),
	FOREIGN KEY (localization_id) REFERENCES locations (localization_id)
);

INSERT INTO managers(manager_name) VALUES('João');
INSERT INTO locations(localization_name) VALUES('Area Central');
INSERT INTO species(species_name) VALUES('leão');
INSERT INTO employees(employee_name, manager_id) VALUES('André', 1);
INSERT INTO animals(animal_name, species_id, sex, age, employee_id, localization_id) VALUES('Simba', 1, 'male', 6, 1, 1);

SELECT * FROM managers;
SELECT * FROM locations;
SELECT * FROM species;
SELECT * FROM employees;
SELECT * FROM animals;