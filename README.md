# MVFCodingTest

## The Goal

To build an application that allows users to enter an arbitrary Github username and be presented with a best guess of the Github user's favourite programming language.

## The story

I decided to build the site as a tool for recruiters. As recruiters are not developers, sometimes they are lack of knowledge about all the key words that are written in their ads. For them I created a simple tool - provide the username in GitHub of the developer, and the app will return you what is the most common language that this user used. That will also help them to understand if the person really is a JavaScript developer, or maybe they used to code with other languages most of the time.

## Approach

After a shrot research on the GitHub API, I discover two options to find out with what languages users are coding. For each reposidory, the API provides the language that took most bytes and an array of the languages that has been used, with how many bytes of code was written.
I decided that the best option will check for each reposidory what is the main language, and to create an array of languages that the user used in their public reposidories.

## Deciding about the favourite programming language

After I had an array of all the languages, I counted them, and the app returned a string that declare for the specific username, what its favourite (or in this case most common) programming language. 

### Problems in the process
 * If the user just opened a username but never open any reposidory, the app will let you know that 'USERNAME mostly worked with No language in GitHub (his page is empty).
