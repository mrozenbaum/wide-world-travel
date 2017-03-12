Wide World Travel Guides

Part 1: Using a controller

Requirements

For this project you need to use Angular to list a collection of travel guides in the DOM. Build an application that has one view, and one controller that will be responsible for retrieving the data and exposing it for use in the view. The view needs to list all book titles, which type of book it is, and the price for the book.

Setup

mkdir -p ~/workspace/exercises/rich-browser/wide-world-travel && cd $_
Create the following file structure:

world_wide_travel
 |_ app
 |    |_ controllers
 |    |     |_ bookCtrl.js
 |    |
 |    |_ app.js
 |
 |_ data
 |    |_ guides.json
 |
 |_ lib
 |    |_ gulpfile.js (or gruntfile.js)
 |
 |_ index.html
Add the follow data to guides.json. You will need to display all three pieces of information about each book, in any format you choose.

{
  "guides": [{
    "type": "city",
    "title": "Paris on $10 a Day",
    "price": 18.99
  }, {
    "type": "city",
    "title": "Venice: Canals and Stuff",
    "price": 14.50
  }, {
    "type": "city",
    "title": "Visiting Hoboken: Why?",
    "price": 1.25
  }, {
    "type": "country",
    "title": "Touring Brazil's Empty Olympic Stadiums",
    "price": 13.50
  }, {
    "type": "country",
    "title": "'Murica: Only Commies Travel Abroad",
    "price": 20.00
  }, {
    "type": "country",
    "title": "Australia: Every Animal Here Can Kill You",
    "price": 18.00
  }, {
    "type": "region",
    "title": "Backpacking Europe on Two Showers a Week",
    "price": 12.48
  }, {
    "type": "region",
    "title": "Rainforests of Cental America",
    "price": 15.00
  }, {
    "type": "region",
    "title": "The Evil Genius Guide to Taking over the Tri City Area",
    "price": 13.49
  }]
}
Remember to also add a .gitignore to the project root folder.

cd into lib and run npm init then install all of your dependencies for your task runner. Remember to use the --save-dev flag to add them to your package.json file. Also run bower init to create a bower.json file.

Install Angular with bower install angular. Remember to add the script tag for angular to index.html.

Now you have the basic structure in place to display your book data in the DOM the Angular Way.

Instructions

Fetch your data using an http call that returns a promise. Save the returned data as a property of the $scope object and loop through it to display the guidebook info to the user.

Here's a list of some things to include in your app in the appropriate spots:

Directives:
ng-app="<your module name>"
ng-controller="bookCtrl"
ng-repeat="book in books"
A call to the data folder for guides.json using $http
Use the $q service to wrap your http call in a promise
$scope.books = <your array of guide books data>



Wide World Travel Guides

Part 2: Adding a factory

Prerequisite

It is recommended that you complete the first Wide World Travel exercise before starting this one.

Setup

Add a factories directory to your existing file structure, and in that directory create a file named guideFactory.js to hold your new Angular factory module:

world_wide_travel
 |_ app
 |    |_ controllers
 |    |     |_ bookCtrl.js
 |    |
 |    |_factories
 |    |     |_ guideFactory.js
 |    |
 |    |_ app.js
 |
 |_ data
 |    |_ guides.json
 |
 |_ lib
 |    |_ gulpfile.js (or gruntfile.js)
 |
 |_ index.html
Instructions

Make a new branch called guide-factory
Separate the database interactions from the DOM interactions, and make your guidebook data available to your controller (and other, future controllers) by moving the http call for guides.json from bookCtrl.js into guideFactory.js
Inject your factory into bookCtrl.js as a dependency


Wide World Travel Guides

Part 3: Routing

Prerequisite

It is recommended that you complete the Wide World Travel factory exercise before starting this one.

Setup

Add a partials directory to your existing file structure, and in that directory create a file named guide-list.html which will contain the HTML template:

world_wide_travel
 |_ app
 |    |_ controllers
 |    |     |_ bookCtrl.js
 |    |
 |    |_factories
 |    |     |_ guideFactory.js
 |    |
 |    |_ app.js
 |
 |_ data
 |    |_ guides.json
 |
 |_ lib
 |    |_ gulpfile.js (or gruntfile.js)
 |
 |_partials
 |    |_ guide-list.html
 |
 |_ index.html
Instructions

You are going to use ngRoute to load the HTML for diplaying guide books from a partial into index.html

Make a new branch called guide-routing
Include the separate angular-route provider into index.html: <script src="my-path-to-angular-route.min.js"></script>
Inject it into your app as a dependency: var myApp = angular.module("MyAppName", ['ngRoute']);
Setup routing in app.js using the config method: app.config(['$routeProvider'....etc
Remember to remove ng-controller references from index.html. Angular-route will now handle binding controllers to partials.