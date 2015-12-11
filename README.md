#OkFido

##About OkFido
-
OkFido is a conceptual web app designed to help match owners with the perfect dog, and vise versa. Users can create an account, log in, search for dogs, and add/remove dogs from their favorites.

The inital purpose of this application is to explore developing a full stack app from start to finish using a rails back end with AJAX on the front end to send and receive data, all while implementing my passion for dogs as the subject matter.

The result of this project is a very simplified version of a more robust concept I have in mind, and is something I hope to expand in the future.

##Technologies
-
This application implements a full stack of technologies from the front-end to the back-end.

####Ruby on Rails
Ruby on Rails is a robust and proven framework used to provide reliable and secure data storage and manipulation on the back-end.

####PSQL
PSQL, or Postgresql, is used to implement a robust and strcutured database on the back-end.

####AJAX
Ajax, which works well with JQuery, is a protocol used to collect and manipulate data from the back end on the front-end.

####Handlebars
Handlebars is a framework for the front end used to easily render data received from the back end into standard HTML.

####JQUery
JQuery is a popular JavaScript library that provides powerful abstractions for rendering data on the front-end.

##Approach
-
I approached this project by doing a lot of planning before I wrote any code. After producing user stories, wireframes, and data models I started programming from the back end forward, making sure to make frequent and meaningful commits.

##Unsolved Problems
-
* My search filters don't work. I hope to fix this in the future by implementing filters on the back end using query strings instead of iterating through received data on the front-end.
* My search barely works. You must type only one word for it to work, and this word must be an exact match with a word found in the search result to work. Again, I hope to implement this in the back-end using query strings.
* I would like to add more data to narrow down searches to a more personal level, such as a user's living situation, other pets they own, an individual dog's special needs...etc.
* I would like to allow dogs to be added by administrators through an authenticated dashbaord.

###User Stories

####As a user, I can search based on:
* Breed
* Gender
* Location
* Age
* Size
* Shelter
* Color

####As a user, I can:
* Make a new search using different criteria
* View more details about a dog by clicking on the result
* Add a dog to my favorites
* List my favorites
* Remove a dog from my favorites

###Wireframes and Data Model
-

####Wireframes
![img_0196](https://cloud.githubusercontent.com/assets/13924928/11756922/3ce4fa22-a02b-11e5-8456-fe0e9f534589.JPG)

####Data Structure
![okfido_data_structure](https://cloud.githubusercontent.com/assets/13924928/11756939/62f20f5c-a02b-11e5-8ff3-dc1b19bfb203.jpg)

###Where to find the app

#####Back-End Repository: [Back-End Repo](https://github.com/AkJones2007/okfido-api)

#####Front-End App: [Front-End App](http://akjones2007.github.io/okfido/)
#####Back-End App: [Back-End App](https://floating-savannah-7491.herokuapp.com/)
