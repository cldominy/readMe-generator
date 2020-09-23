// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description 
${data.description}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.installation}

## Usage 
${data.usage}

## Credits
${data.credit}

## License
${data.license}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions 
[GitHub Profile](https://github.com/${data.githublink})
Email: ${data.email}`
}

module.exports = generateMarkdown;
