USE burgers_db;

-- populate table with 3 default burgers and display table
INSERT INTO burgers (burger_name, date)
	VALUES
		("cheeseburger", NOW()),
		("bacon cheeseburger", NOW()),
		("hamburger", NOW());