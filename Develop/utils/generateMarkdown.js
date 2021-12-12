const fs = require('fs');

const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/README.md', fileContent, err => {
      if (err) {
        reject(err);
        return
      }

      resolve({
        ok: true,
        message: 'README created!'
      });
    });
  });
};

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log("BooYahh");

  let badge = '';
  switch (data.license) {
    case "Apache License 2.0":
      badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case "BSD 2-Clause":
      badge = '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
      break;
    case "GNU(GPL)":
      badge = '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
      break;
    case "MIT":
      badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case "Mozilla":
      badge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
      break;
    case "Eclipse":
      badge = '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
      break;
  }

  let valueReturn = `# ${data.title}
  
  ${badge}

  ## License
  ---
  This project is using the open source license ${data.license}.

  ## Project Description 
  ---
  ${data.description}

`;
if (data.confirmInstallations) {
  valueReturn = `${valueReturn}
  ## Installation
  ---
  ${data.installation}
  
  `;

}

  valueReturn = `${valueReturn}
  ## Usage
  ---
  ${data.usage}

  ## Contributing
  ---
  ${data.contribution}

  ## Tests
  ---
  ${data.test}

  `;

  

return valueReturn;
}

module.exports = { generateMarkdown, writeFile };
