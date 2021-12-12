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
          type: 'input',
          name: 'installation',
          message: 'Provide installation instructions. (Required)',
          validate: confirmInstallations => {
              if (confirmInstallations) {
                  return true;
              } else {
                  console.log('Please provide3 installation instructions');
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
                  return false;
              }
          }
      },
      {
          type: 'input',
          name: 'contribution',
          message: 'Provide contribution guidelines. (Required)',
          validate: conGuideInput => {
              if (conGuideInput) {
                  return true;
              } else {
                  console.log('Please provide the contribution guidelines!');
                  return false;
              }
          }
      },
      {
          type: 'input',
          name: 'test',
          message: 'Provide test instructions. (Required)',
          validate: testInstructions => {
              if (testInstructions) {
                  return true;
              } else {
                  console.log('Please provide test instructions!');
                  return false;
              }
          }
      },
      {
          type: 'list',
          name: 'license',
          message: 'Choose a license. (Require)',
          choices: ['Apache License 2.0', 'BSD 2-Clause', 'GNU(GPL)', 'MIT', 'Mozilla', 'Eclipse']
      },
      {
          type: 'input',
          name: 'github',
          message: 'Enter your GitHub username. (required)',
          validate: githubInput => {
              if (githubInput) {
                  return true;
              } else {
                  console.log('Please enter your GitHub username!');
                  return false
              }
          }
      },
      {
          type: 'input',
          name: 'email',
          message: 'Enter your email address. (Required)',
          validate: emailInput => {
              if (emailInput) {
                  return true;
              } else {
                  console.log("Please enter your email address!");
              }
          }
      }  
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
