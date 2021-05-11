# Model-View-Controller (MVC): Tech Blog

## Launch the Application
[Memoirs of an Apparatus]()
## Overview
Memoirs of an Apparatus is a blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. The application’s folder structure follows the Model-View-Controller paradigm. The application utilizes the [express-handlebars](https://www.npmjs.com/package/express-handlebars) package to implement Handlebars.js for the Views, the [MySQL2](https://www.npmjs.com/package/mysql2) and [Sequelize](https://www.npmjs.com/package/sequelize) packages to connect to a MySQL database for the Models, and create an Express.js API for the Controllers.

## Application Functionality and Appearance

When a user visit's the site for the first time they are presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage; and the option to login or signup. When the user chooses signup they are prompted to create a login. Once the user clicks on the sign-up button their credentials are saved, they are logged into the site and navigated to thier profile with a listing of post they have authored. When a user is signed into the site they will see navigation links for the homepage, profile and logout. From the homepage users are able to click on the post title to view the post and  presented with the post title, contents, post creator’s username, and date created for that post and the option to leave a comment. From the profile page users are presented with any blog posts they have already created and the option to add a new blog post. When a user clicks on the logout option in the navigation they are signed out of the site.

### The following images show the web application's appearance and functionality: 

#### Signup Page

[!Signup Page]()

#### Login Page

[!Login Page]()

#### Homepage

[!Homepage]()

#### Profile Page

[!Profile]()

#### New Post Page

[!New Post]()

#### View Post and Comment

[!View Post and Comment]()

______________________________
Week 14 Homework - UofO14mvcTechBlog

© 2021 PDXbellasaurus :sauropod: