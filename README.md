# MVFCodingTest

## The Goal

To build an application that allows users to enter an arbitrary Github username and be presented with a best guess of the Github user's favourite programming language.

## The story

I decided to build the app as a tool for recruiters. As recruiters are not developers, sometimes they are lack of understanding about all the key words that are written in their ads. For that I created a simple tool - provide the username in GitHub of the developer, and the app will return you what is the most common language that this user used. That will also help them to understand if the person really is a JavaScript developer, or maybe they used to code with other languages most of the time.

## Approach

After a shrot research on the GitHub API, I discover two options to find out with what languages users are coding. For each reposidory, the API provides the language that took most bytes and an array of the languages that has been used, with how many bytes of code was written.
I decided that the best option will check for each reposidory what is the main language, and to create an array of languages that the user used in their public reposidories.

## Deciding about the favourite programming language

After I had an array of all the languages, I counted them, and the app returned a string that declare for the specific username, what its favourite (or in this case most common) programming language. 

### Problems in the process
  * If the user just opened a username but never open any reposidory, the app will let you know that 'USERNAME mostly worked with No language in GitHub (his page is empty).
  * In the rare cases that a user programmed with two or more languages the same amount of times, and that was his most commons ones, the app will return the names with & between them.
  * Some of the users open reposidories with not written anything inside. those reposidories has the language - null. For that , in a case of more than one common langauge, the app will ignore the null and will return only the ones which are not null.
  * Enter a username that is not exsist - the app will notice you that 'GitHub does not know this username.'
 
## Time frame
Since I was not under time pressure, I spent an hour just to play with the API. I never saw it before, and it was nice to discover all kind of options this API has to offer. 
It took me another hour an a half to set all the webpacks and build the basic function of the app.
After that I fixed the problems I discovered for another hour and a half and spent another hour to play with the styling.
In total, the building of the app too four hours, not including the time I played with the API to know it.

## Technologies Used
 * HTML5
 * CSS3 (SASS)
 * JavaScript (ES6)
 * React (including React-DOM)
 * axios
 * Webpack
 * Bulma
 * babel
 * Git
 * GitHub
 
## How to run the app
After unzipipng the app press **yarn**
Then **yarn serve**
That should run the app automatically on your default browser.

Hope you will enjoy using the app,
Daniel

 
