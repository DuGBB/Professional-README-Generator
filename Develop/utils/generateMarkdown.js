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
  let valueReturn = `# ${data.title}
  
  ## Project Description 
  ---
  ${data.description}

`;
if (data.confirmInstallations) {
  valueReturn = `${valueReturn}
  ## Installation Instructions
  ---
  ${data.installation}
  
  `;

}
return valueReturn;
}

module.exports = { generateMarkdown, writeFile };
