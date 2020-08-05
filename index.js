const fs = require("fs");
const path = require("path")


const questions = [
{
    type: "input",
    name: "managername",
    message: "What is your team manager's name?"
},{
    type: "input",
    name: "managerid",
    message: "What is your team manager's id?"
},
{
    type: "input",
    name: "email",
    message: "What is your manager's email?"
},
{
    type:"input",
    name: "managernumber",
    message: "What is your team manager's office number?"
},
{
    type: "input",
    name: "membertype",
    message: "Which type of team member would you like to add?"
},
{
    type: "input",
    name: "engineername",
    message: "What is your engineer's name?",

},
{
    type: "input",
    name: "engineerid",
    message: "What is your engineer's id?",
    
},
{
    type: "input",
    name: "engineeremail",
    message: "What is your engineer's email?"
   
},
{
    type: "input",
    name: "engineergithub",
    message: "What is your engineer's GitHub username?"
},
{
    type: "input",
    name: "membertype",
    message: "Which type of team member would you like to add?"
},
{
    type: "input",
    name: "internname",
    message: "What is your intern's name?",
},
{
    type: "input",
    name: "internid",
    message: "What is your intern's id?",
    
},
{
    type: "input",
    name: "internemail",
    message: "What is your intern's email?"
   
},
{
    type: "input",
    name: "internschool",
    message: "What is your intern's school?"
},
];
// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((inquireResponses) => {
        console.log("Generating HTML...");
        writeToFile("team.html");
    })
init();

// // function to write team.html file
// function writeToFile(fileName, data) {
//     return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}
