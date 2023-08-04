// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require("path");

const generateMarkdown = require(utils/generateMarkdown.js);
// TODO: Create an array of questions for user input

const questions = [
    {
     type: 'input', 
     name: 'title',
     message: 'Project title?',  
    }
    {
     type: 'input',
     name: 'desciption',
     message: 'Project description?',  
    }
    {
        type: 'input',
        name: 'installation',
        message: 'Installation instructions?',  
    }
    {
        type: 'input',
        name: 'usage',
        message: 'Project usage?',  
    }
    {
        type: 'input',
        name: 'resources',
        message: 'Resource Info?',  
    }
    {
        type: 'input',
        name: 'email',
        message: 'For questions(email)?',  
    }
    {
        type: 'input',
        name: 'github',
        message: 'For questions(sis.sasley)?',  
    }
    {
        type: 'list',
        name: 'license',
        message: 'License?',
        choices: ['MIT', 'ISC', 'GNUPLv3'],
        filter(val){
            return val.toLowerCase();
        }  
       }
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
