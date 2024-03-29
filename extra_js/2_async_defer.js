// when we are loading the webpage two things are occuring: HTML parsing and loading of the script
// script loading contains two parts: fetching the script and execution of script

// without async and defer
// HTML parsing going on 
// script tag encountered!
// HTML parsing paused
// script fetching starts
// script fetched
// script execution starts
// script execution ends
// HTML parsing resumes

// with async attribute
// HTML parsing going on 
// script tag encountered!
// HTML parsing isn't paused
// script tag is fetched asynchronously
// when script is fetched
// HTML parsing pauses
// script execution starts
// when script execution ends
// HTML parsing resumes

// with defer attribute
// HTML parsing going on 
// script tag encountered!
// HTML parsing isn't paused
// script tag is fetched asynchronously
// when script fetched
// HTML parsing isn't paused
// HTML parsing goes on
// when HTML parsing is done
// scripot execution starts and ends

// when to use async and when to use defer
// async doesn't gurantee that the scripts will be executed in the specified order (this can cause issues if scripts are dependent on each other)
// if order of execution of scripts doesn't matter then use the async atttribute, else use the defer attribute