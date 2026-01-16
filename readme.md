# Bytesized Math
## Summary
This is a light learning management software focused purely on being a fun math educational platform with built in games and digital rewards. 
## Languages
Vanilla web technologies were used to create this fullstack web application
- HTML
- CSS
- TypeScript ( superset of JavaScript )
- ExpressJS
## Features
This web application utilizes
## Speed Optimizations
Originally the web application read a file from its storage location on every request which took about 5ms on my development laptop. I pursued a different approach early on to read the file contents of an HTML page once when the web application on the server is booting and saving the contents to memory as a variable. I then sent the contents from memory to the user which cut the response time down to 0.5ms on the server side. This had a 10x speed improvement on response times. 

## Purpose
This is a simple math quiz game where the more answers the user answers correctly, the more difficult the math problems become. This is also a simple test of an offline available PWA.
## Description
This math quiz game uses random numbers generated to create addition problems for the user to solve. Once the user answers a set amount of problems correctly, the difficulty increases by increasing the number of digits each random number can contain. 
The goal is for the user to answer as many addition problems as possible using mental math. 
## Languages
- HTML
- CSS
- JavaScript
## Technologies
This app uses vanilla HTML, CSS, and JavaScript without any libraries or frameworks being utilized. The project is version controlled with Git.
## Features
- Manipulation of the Document Object Model
- Random number generation
- User input checking
## Instructions
The user is shown random numbers to add together. The user must input the sum of the two numbers into the textbox and press the submit button. 
The card will update with the response of the submission. The user will have the option of answering another problem. 
## License
MIT for free use and distribution.