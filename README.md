# goodburger

Goodburger is a place where you can devour burgers, free of charge.

## Purpose
To follow the MVC design pattern, using an ORM and save data to a SQL database. This is deployed to Heroku with JawsDB as the database.
 
## Screenshot
![screenshot](./public/assets/images/screenshot.png)

## Tech/framework used
<b>Built with</b>
- [Node.js](https://nodejs.org/en/)
- [MySQL](https://www.npmjs.com/package/mysql)
- [Express.js](https://www.npmjs.com/package/express)
- [Handlebars.js](https://www.npmjs.com/package/express-handlebars)
- [Moment.js](https://momentjs.com/)
- [body-parser](https://www.npmjs.com/package/body-parser)
- [Bootstrap](https://getbootstrap.com/docs/3.3/)
- [JawsDB](https://elements.heroku.com/addons/jawsdb)
- HTML5, CSS3, Javascript and jQuery

## Features
Google Fonts and Bootsrap provide for a polished UI, and Heroku's hosting combined with JawsDB permit data persistent burgers.

## Installation
- Visit the deployed site at [Good Burger](https://fast-scrubland-27236.herokuapp.com/) for demo.
- Otherwise, fork or clone the GitHub repo to your machine.
- Ensure that you have Node.js and MySQL installed on your machine
- Set up the database using MySQL to run the schema.sql and seeds.sql files
- If you have a password that protects your MySQL root user, enter that password in the connection.js file in the cloned repo
- In your CLI, navigate to the cloned directory. Install the npm dependencies and start the server.

  `npm install`

  `node server.js`

- Good Burger runs locally on port 3000. Open your favorite web browser and navigate to localhost:3000 and check out Good Burger!