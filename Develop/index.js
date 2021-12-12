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
        },
        {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project: (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please provide a description of the project!');
                return false;
            }
        }
      },
      {
          type: 'confirm',
          name: 'confirmInstallations',
          message: 'Would you like to provide installation instructions?',
          default: true
      },
      {
          type: 'input',
          name: 'installation',
          message: 'Provide installation instructions.',
          when: ({ confirmInstallations }) => {
              if (confirmInstallations) {
                  return true;
              } else {
                  return false;
              }
          }
      },
      {
          type: 'input',
          name: 'usage',
          message: 'Provide usage information. (Required)',
          validate: usageInfo => {
              if (usageInfo) {
                  return true;
              } else {
                  console.log('Please provide the usage information!');
              }
          }
      }//comma
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
