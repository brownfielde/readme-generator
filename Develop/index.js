// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = 
[
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your Repository?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please decribe this project.',
    },
    {   type: 'input',
        name: 'require',
        message: 'Include project dependencies here' 
    },
    {   type: 'input',
        name: 'usage',
        message: 'List the technologies used in the project'
    },
    {   type: 'input',
        name: 'installation',
        message: 'Please include any steps to install'
    },
    {   type: 'checkbox',
        name: 'license',
        message: 'Select a license for the project',
        choices: ['MIT', 'Zlib', 'APACHE2.0','n/a'],

    },
    {   type: 'input',
        name: 'assets',
        message: 'Insert the relative path to any relevant images'
    },
    {   type: 'input',
        name: 'contributors',
        message: 'Include any additional contributors',   
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please include any required tests necessary to run the application',
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
     fs.writeFile(fileName,data, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('README created');
     });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log ('Initializing README file');
        writeToFile('./utils/README.md', generateMarkdown({...answers}));
    });
    }

// Function call to initialize app
init();
