# Javascript-Challenge

This project demonstrates the use of Javascript to create an interactive website, specifically using D3.js to collect HTML form elements in the form of DOMs (Document Object Models) and adding event triggers to elements on the page filter the given dataset based on user entry. The dataset is a sample set of UFO sightings in the U.S. (the first two weeks of January 2010 only).

These are parts of the project;UFO-level-1 and UFO-level-2 (Basic and Advanced).

The Basic site allows the user to enter a date in the date field and filter the table according to that date and display it once the "Filter Table" button is pressed or the Enter key is pressed on the keyboard.

The Advanced site allows more filters for the user including Date, City, State, Country, and Shape. The user can enter one or any number of these filters to return the filtered table displayed on the page.

## Personal comments on working on the project:
While working on the assignment and clearing the code I faced the problem that was not resolved even with the help of educational support team. Data was not filtering  though the code and links in it seem to be fine. I seek the help of my Instructor, TA and Tutor and we are still figuring out what's causing the problem.


## Development Requirements
Step	√	Requirement
01	√	Level 1: Automatic Table and Date Search (Required) - Create a basic HTML web page or use the starter code
02	√	Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.
03	√	Make sure you have a column for date/time, city, state, country, shape, and comment at the very least
04	√	Use a date form in your HTML document and write JavaScript code that will listen for events and search through the date/time column to find rows that match user input.
05	√	Level 2: Multiple Search Categories (Optional) - Using multiple input tags and/or select dropdowns, write JavaScript code so the user can to set multiple filters and search for UFO sightings using the following criteria
06	√	date/time
07	√	city
08	√	state
09	√	country
10	√	shape
From the grading rubric pdf:
Step	√	Requirement
01	√	Rendering Table: Table renders without error on page load
02	√	Table includes all columns
03	√	Clears table before rendering again
04	√	Table rerenders with filtered data
05	√	Filtering data: Event handler calls a function to filter the data
06	√	Successfully grabs in the input value
07	√	Correctly uses the filter method to get the new table data based off the given input
08	√	Prevents the page from reloading using D3
09	√	Bonus: Code is able to handle 5 total filters at once
10	√	The multi-filtered data is then rendered back to the table
