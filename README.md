
   
  <p>
  <img src="https://media.giphy.com/media/PkjuJb3knlRiuhx9RO/giphy.gif"width="450"/></p>
  <hr>
  
  ## Table Of Contents
  |   |       | |
| ------------- |:-------------:| -----:|
| [E-mail](#email)| [Project Title](#Project-title)| [Description](#description)|
| [Installation](#installation)| [Usage](#usage)| [License](#license)|
| [Contribute](#contribute)| [Tests](#tests)| [Questions](#questions)|
  <hr>

  ## Email 
  idelmundo@gmail.com
  <hr>
      
  ## Project title 
  Reverse Engineering Code passport. 
  <hr>

  ## Description 
  We were asked to reverse engineer a passport.js and understand what its doing line by line. We would have to explain it to a person who doesn't know what the code is doing. This app allows users to create an account, have a login username and password stored in mysql database. For example when we login to our email such as google we have email and password where its always save is knows as secret pw and it will always be the same pw.  
  <hr>

  ## First step 
  Let see this app in action lets clone this repostory to you computer by opening our terminal or bash (PC user) git clone and paste the to your terminal. 2. open terminal and lets download "npm i" "i" shortcut for install. These will install all the nodes in the packages. 3. Lets run "node server.js" you will see this connect to our local server which is 8080. 4. Lets open the web brower and enter http://localhost:8080 in the search bar. 
  <hr>
  
  ## Lets go through each folder 
  Lets begin with server.js since that makes more sense because thats what were going to use to commincate with all the files and browser. Line 2-4 these are depedency think of it like a child that depends on its parents, application the depend on other code. Line 5 is pretty much saying this will be needed in the folder called config/passport. Line 8 and 9 is our env.port that can be heroku server or local server such as "8080,3000" and other server port. It is important to have the port in CAPITAL because we are letting other programmer not the change this. In line 9 we re saying that this will be seen in ./model folder. Line 12-19 we are seeting up express routes for configuring middleware that way it can access the public folder and authenticated.js. Then for line 22-29 we are setting express as well since we defined it to be app then access html-route and api-route. In here we are using sequelize and listening if a user is logging a message it can be passed to the db. 

  ## Models
  Lets start with user.js, in here we are requires "bcrypt for password hasing. This way the database will be secure and people will not know your password. The password will be stored in the database. Then index.js this basically connects to database and import user input data. 

 ## Routes
 Lets start with html-routes.js in here we have routes for the user to either login or sign up if they don't have a login then can create one and brings them to the next page. If they are a member they can login then goes to the main page. This will eventually go to the public folder and go through all the html side "front end".
 In api-routes.js this contain routes or sigining in and logging out then in line 36 getting users data displayed on the client side. 

## Public
 In this folder this is where all the HTML lives and styling. Also some JS such as login.js, member.js and signup.js where we can get users email and password input. 
  ## Installation 
  Mysql2, Passport, passport-local, sequelize, bcryptjs, express, express-session
  <hr>

  ## Usage 
  N/A
  <hr>

  ## License 
  MIT
  <hr>

  ## Contribute
  Github, heroku
  <hr>

  ## Tests 
  js
  <hr>

  ## Questions 
  
  <hr>

  ![license](https://img.shields.io/badge/license-MIT-orange.svg)
        