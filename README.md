# MVFCodingTest

## The Goal


To build an application that allows users to enter an arbitrary Github username and be presented with the best guess of the Github user's favourite programming language.

## The story


I decided to build the app as a tool for recruiters. As recruiters are not developers, sometimes they are lack of understanding about all the keywords that are written in their ads. For that, I created a simple tool - provide the username in GitHub of the developer, and the app returns what is the most common language that this user used. That can help them to understand if the person is a JavaScript/PHP/Python/Ruby developer, or maybe they used to code with other languages most of the time.

## Approach


After a little research on the GitHub API, I discover two options to find out with what languages users wrote their apps. For each repository, the API provides two kinds of data about the language. One is the name of the language with most bytes. The other data is an array of the languages that have been used, with how many bytes of code each was written. I decided that the best option is checking for each repository what is the main language, and creating an array of languages that the user used in their public repositories.

## Deciding about the favourite programming language


After I had an array of all the languages, I counted them, and the app returned a string that declares for the specific username, what their favourite (or in this case, most common) programming language.

### Problems in the process


If the user just opened a username but never open any repository, the app response is that 'USERNAME mostly worked with No language in GitHub (his page is empty).
In the rare cases that a user programmed with two or more languages the same amount of times, and that was his most commons ones, the app returns the names with & between them.
Some of the users open repositories with not written anything inside. Those repositories have the language - null. For that, in a case of more than one common language, the app ignores the null and returns only the ones which are not null.
Enter a username that does not exist - the app notices you that 'GitHub does not know this username.'

## Time frame


Since I was not under time pressure, I spent an hour to play with the API. I never viewed it before, and it was nice to discover all kind of options this API has to offer. It took me another hour and a half to set all the webpacks and build the basic function of the app. After that, I fixed the bugs I discovered, for another hour and a half, and spent another hour to play with the styling. In total, the building of the app too four hours, not including the time I played with the API to know it.


## Technologies Used
* HTML5
* CSS3 (SASS)
* JavaScript (ES6)
* React (including React-DOM)
* Axios
* Webpack
* Bulma
* babel
* Git
* GitHub

## How to run the app


After unzipping the app run in your terminal the commend  **yarn** Then **yarn serve**. That should run the app automatically on your default browser. If this is not work, try to run **yarn upgrade** first, and then again **yarn serve**.


Hope you will enjoy using the app, 


Daniel

 
