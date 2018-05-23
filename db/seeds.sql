USE burger_db;
-- default burgers
INSERT INTO burgers (burger_name, createdAt)
  VALUES
    ("cheeseburger", NOW()),
    ("bacon cheeseburger", NOW()),
    ("hamburger", NOW());