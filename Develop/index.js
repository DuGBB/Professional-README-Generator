const inquirer = require('inquirer');
const { generateMarkdown, writeFile } = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions =  () => {
    return inquirer.prompt([
        {
         type: 'input',
         name: 'title',
         message: 'Enter your project title. (Required)',
         validate: titleInput => {
             if (titleInput) {
                 return true;
             } else {
                 console.log('Please enter the title of your project!');
                 return false;
             }
         }
        }//comma here
    ])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    questions()
    .then(readMeData => {
        return generateMarkdown(readMeData);
    })
    .then(markDown => {
        return writeFile(markDown);
    })
};

// Function call to initialize app
init();
