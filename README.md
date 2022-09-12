# UFOs

## Overview
The UFO sightings webpage and dynamic table are working as intended with the date filter, but filters for the city, state, country, and shape will also be added. The purpose of this analysis is to use Javascript and HTML to provide a more in-depth analysis of UFO sightings and allow users to filter for multiple criteria at the same time and display the results in the webpage table. 

## Resources
### Data Source 
- [data.js](https://github.com/lkachury/UFOs/blob/main/static/js/data.js) JavaScript array file

### Software
- Visual Studio Code 1.69
- JavaScript and HTML
- Bootstrap 3 and CSS
- Chrome Developer Tools
- D3 (Data Driven Document) Javascript library

## Results 

### Deliverable 1: Filter UFO sightings on multiple criteria

#### 1. The list element that creates the button is removed, and there are five list elements for filtering in the [index.html](https://github.com/lkachury/UFOs/blob/main/index.html) file 
This was done with the following code: 
<br /> ![image](https://user-images.githubusercontent.com/108038989/189569912-87e1ec12-9415-45d0-ae73-9a99e8219ee7.png)

This is how it is displayed in the webpage: 
<br /> ![image](https://user-images.githubusercontent.com/108038989/189570047-e01bca83-4b5f-4568-8349-6434c25a035a.png)

#### 2. The event listener is modified to detect changes to each filter in the [app.js](https://github.com/lkachury/UFOs/blob/main/static/js/app.js) file
This was done with the following code: 
<br /> ![image](https://user-images.githubusercontent.com/108038989/189570334-484eccc6-3980-4c93-86e7-0d15762c96cb.png)

#### 3. The updateFilters() function saves the element, value, and the id of the filter that was changed
This was done with the following code: 
<br /> ![image](https://user-images.githubusercontent.com/108038989/189570442-f96874a4-91d7-4701-9aac-8b1e99de27fb.png)

#### 4. The filterTable() function loops through all of the filters and keeps any data that matches the filter values
This was done with the following code: 
<br /> ![image](https://user-images.githubusercontent.com/108038989/189570495-6241ae68-2459-463f-a796-8975df5d4cf7.png)

#### 5. The webpage filters the table correctly based on user input

The Filter Search input box in the webpage was designed so that end-users could narrow the search of UFO sightings from the raw [data.js](https://github.com/lkachury/UFOs/blob/main/static/js/data.js) file and the results would be conveniently displayed in the dynamic table. The data can be filtered by date, city, state, country, and/or shape and the placeholder in these input fields indicate to the end-user the format in which the search terms should be entered. 

This is an example of someone utilizing the webpage to search for triangle shaped UFO sightings in California, US:
<br /> ![image](https://user-images.githubusercontent.com/108038989/189572716-9ab03838-d1fd-459c-9787-e8585f2f7f4f.png)

## Summary 
Using JavaScript and HTML, the code in the [index.html](https://github.com/lkachury/UFOs/blob/main/index.html) file was modified to add filters for the city, state, country, and shape in addition to the date filter already created in this module. Using JavaScript, the handleClick() function in the [app.js](https://github.com/lkachury/UFOs/blob/main/static/js/app.js) file was replaced with a new function that saves the element, value, and id of the filter that was changed. Then, a new function was created to loop through the dataset and to keep only the results that match the search criteria. Lastly, the webpage was updated with the search criteria once "Enter" was pressed.

### Drawbacks and Recommendations 
1. A drawback to the design of the webpage is the lack of a button or function to clear the data after each search. Currently, the only way to clear the results and start a new search is to manually delete the information entered in the filters. A recommendation for further development would be to develop and display a button that will clear the results and reset the filters to facilitate a new search. 

2. Another drawback of the webpage is that the design is case sensitive. When the country field is filtered with "us", the table is populated with dozens of results: 
<br /> ![image](https://user-images.githubusercontent.com/108038989/189575962-88efc830-f2b0-46c6-b02c-5c7891203305.png) <br /> However, when the country field is filtered with "US" or "Us", the table does not return any results: <br /> ![image](https://user-images.githubusercontent.com/108038989/189576272-ac777d21-05a0-471b-b803-c4340209a649.png) <br /> ![image](https://user-images.githubusercontent.com/108038989/189576223-aa3febc5-8fd3-483b-85f5-202ba290e69a.png) <br /> Another recommendation for further development would be to add code that will bypass case-sensitivity and/or convert the user input values to lower case letter format. 
