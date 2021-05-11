
# Model-View-Controller (MVC): Tech Blog

## Launch the Application
[Memoirs of an Apparatus](https://young-crag-23305.herokuapp.com/)
## Overview
Memoirs of an Apparatus is a blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. The application’s folder structure follows the Model-View-Controller paradigm. The application utilizes the [express-handlebars](https://www.npmjs.com/package/express-handlebars) package to implement Handlebars.js for the Views, the [MySQL2](https://www.npmjs.com/package/mysql2) and [Sequelize](https://www.npmjs.com/package/sequelize) packages to connect to a MySQL database for the Models, and create an Express.js API for the Controllers.

## Application Functionality and Appearance

When a user visit's the site for the first time they are presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage; and the option to login or signup. When the user chooses signup they are prompted to create a login. Once the user clicks on the sign-up button their credentials are saved, they are logged into the site and navigated to thier profile with a listing of post they have authored. When a user is signed into the site they will see navigation links for the homepage, profile and logout. From the homepage users are able to click on the post title to view the post and  presented with the post title, contents, post creator’s username, and date created for that post and the option to leave a comment. From the profile page users are presented with any blog posts they have already created and the option to add a new blog post. When a user clicks on the logout option in the navigation they are signed out of the site.

### The following images show the web application's appearance and functionality: 

#### Signup Page

<img width="135" alt="signup" src="https://user-images.githubusercontent.com/74746211/117801907-ace3eb80-b209-11eb-9476-33b9f6b6d45d.PNG">

#### Login Page

<img width="156" alt="login" src="https://user-images.githubusercontent.com/74746211/117802023-cf760480-b209-11eb-8003-77496ca87226.PNG">

#### Homepage

<img width="307" alt="homepage" src="https://user-images.githubusercontent.com/74746211/117802068-dac93000-b209-11eb-836c-fd7e36982d56.PNG">

#### Profile Page

<img width="379" alt="profile" src="https://user-images.githubusercontent.com/74746211/117802103-e3ba0180-b209-11eb-9c62-aedea2b3aa7e.PNG">

#### New Post Page

<img width="309" alt="new-post" src="https://user-images.githubusercontent.com/74746211/117802125-eae10f80-b209-11eb-8388-5aa4d3fbb99e.PNG">

#### View Post and Comment

<img width="302" alt="view-post" src="https://user-images.githubusercontent.com/74746211/117802141-f2a0b400-b209-11eb-9058-530644d95e58.PNG">

______________________________
Week 14 Homework - UofO14mvcTechBlog

© 2021 PDXbellasaurus :sauropod:
