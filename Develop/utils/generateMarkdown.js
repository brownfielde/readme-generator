// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) {

const renderLicenseBadge = (license) => { 
if (license){
    switch (license) {
      case 'MIT':
        return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)(https://opensource.org/licenses/MIT)';
      case 'Zlib':
        return '![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)(https://opensource.org/licenses/Zlib)';
      case 'APACHE2.0':
        return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)(https://opensource.org/licenses/Apache-2.0';
      default:
        return '';
    }
} else {
  return '';
}
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {
  if (license){
    switch (license) {
      case 'MIT':
        return '[MIT](https://opensource.org/licenses/MIT)';
      case 'Zlib':
        return '[Zlib](https://opensource.org/licenses/Zlib)';
      case 'APACHE2.0':
        return '[APACHE2.0](https://opensource.org/licenses/Apache-2.0)';
      default: 
        return '';
    }
  } else {
    return '';
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {
  if (license){
    return `##License \n\This project uses the ${license} license`;
  } else {
    return '';
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributors](#contributors)
  - [Tests](#tests)
  - [Questions](#questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Screenshot 
  ![alt text](${data.assets})
  ## Contributors 
  ${data.contributors}
  ## Tests 
  ${data.test}
  ## License 
  ${data.license}


`;
}

export default generateMarkdown;
