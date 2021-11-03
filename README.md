## Weather App

A weather application designed to do the following:

- Allow user to search by location, postcode, or lat/lng
- Display current weather and 7 day forecast for each location searched
- User can save searched locations
- Saved locations are listed for the user
- Saved locations can be removed

## Approach and considerations

I decided to use React, Bootstrap and a component oriented programming method to complete this project. The layout of a weather app seems naturally made up of small components which can be reused such as the search elements, individual forecast displays etc. so React seems like a good choice for the front end. State and hooks also provide the tools to deal with data changing regularly as calls to the api are made. In addtion I am comfortable with React and Bootstrap, and using them together with ESLint, prettier and styled components allowed me to quickly set up a development environment and focus on the task at hand.

For the purposes of the task, I've decided to focus on the front end, and not add a back end to manage interactions with the API. This would be a consideration with more time, as using React means that the API key is exposed to the users which is a security risk. There are alternatives that I can look at which would include using private routes, or to add a server, probably using express, to handle the API calls.

I was also planning to add local storage to the app, in order for user's saved searches to be availabe when they return to the app. There are alternatives as well, such as adding a database, but the simplest solution would be to save the currentSearch and searchList array to local storage, and access it when the app opens. I didn't have time to add this in the time limit of the exercise but will add it after. [EDIT: this has been added to the most recent version]

The app looks fairly simplistic currently. My priority was getting the app to function correctly, there is scope to improve the aesthetics in the future.

## Screenshots

Mobile:<br>
<img src="https://user-images.githubusercontent.com/64267174/140054014-108a0246-7e25-4189-949f-443633322c7d.png" alt="alt text" width="250" height="444"> <img src="https://user-images.githubusercontent.com/64267174/140054063-3c7b7c0e-b174-4516-b8cb-86cd3752999b.png" alt="alt text" width="250" height="444">

Desktop: <br>
<img src="https://user-images.githubusercontent.com/64267174/140054162-ef51613e-9adb-4be0-abe0-9a172dc5582e.png" alt="alt text" width="600">

## Final Commit (End of the day)

I started the task at approx 8.30 am. The commit that I tagged as final, was commit 6ccbbf1 at 18:41 although I corrected a problem with the delete function in the commit I made shortly after this (919825e 19:25).

## Changes

- Fixed bug when searching with blank search terms - 3065469 - 22:30
- Local storage function added - fae4e8a - 9am 05/05/2021
- Fixed bug with Show Weather button in saved searches - c4c746c - 12:00 06/05/2021
- Save search now checks and blocks duplicates - fa81cef - 06/05/21

## Installation and Setup Instructions

Clone down this repository. You will need node and npm installed globally on your machine.

Installation:

npm install

To Start React Dev Server:

npm run start

To Visit App:

localhost:3000/weather-app

## Further Actions:

I have added these to my project plan which can be seen at: https://github.com/jwpf100/react-weather-app/projects/1

## Additional Tasks

- add loading placeholders to maintain shape of app
- Option to change units
- Host the weather images, currently there is a slowdown as they load.
- Change language of response/total solution. API can provide in multiple languages.
- Search when typing paused (type and wait) rather than relying on search button.
- Is it possible to display all search options when there are duplicates e.g. multiple Londons, showing all and being able to choose would be a better user experience.
- store weather icons locally

## Bugs/Limitations

### Critical

- Leaving the search fields blank causes a fatal error [EDIT: FIXED]
- Saved Searches - ensure that duplicates can't be added to list

### Important

- Error catching when API doesn't return with data - currently nothing happens
- Validation on Search Inputs (Number validation on lat/long, text on country)
- Design/Appearance needs to be improved, currently the app looks very basic
- Formatting of output e.g. Lat/Lon reduce digits, date on 7 day forecast in US
- Display of seven day forecast, break into columns that are aligned

### Less Urgent

- Allow enter to confirm search
- Simplify the search states (eg. searchCity, searchCountry etc. in the SearchSelection component). Can an object be used instead.
