# ROCKETCLIPZ

## Explanation
This is a CRUD application that allows users to share clips from the hit car soccer game Rocket League.

## Link to Live Site
https://rocketclipz.herokuapp.com/home

## Technologies Used
Using express to create all of the routes and mongoDB atlas to store the data.

You can view clips if you are not logged in but in order to add/edit/delete clips you must be logged in, and only the user that created those clips can edit or delete them. When a user adds a clip it automatically adds the clip to their homepage by using a hidden input set to the user's name. This attaches the user's name to the clip schema and I only allowed the edit/delete buttons to appear on pages where the current user matches the user in the clipSchema.

The big thing I figured out with this project was how to manipulate the video tag in a way that it would play automatically and loop on the homepage kind of like a gif but still play with sound on the show page. 


## Unsolved Problems//Things to add
I would have liked to add comments to the website or some kind of ranking type thing so that the page could poulate by most popular clip, or most comments and have different sorting features.
