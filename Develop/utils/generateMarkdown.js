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

  # License 
  
  This project is using the open source license ${data.license}.

  # Project Description  
  
  ${data.description}

  # Table of Contents 
  
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Contributing](#contributing)
  4. [Tests](#tests)
  5. [GitHub Username](#github-username)
  6. [Email Address](#email-address)

  # Installation 
  
  ${data.installation}
  
  # Usage 
  
  ${data.usage}

  # Contributing 
  
  ${data.contribution}

  # Tests 
  
  ${data.test}

  # GitHub Username 
  
  ${data.github}

  # Email Address 
  
  To reach out to me with additional questions/comments, contact me at ${data.email} 

  `;

  

return valueReturn;
}

module.exports = { generateMarkdown, writeFile };
