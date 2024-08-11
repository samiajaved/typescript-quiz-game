#! /usr/bin/env node

import inquirer from "inquirer";

let quiz = await inquirer.prompt([
    {
        name : "question1",
        type: "list",
        message: "What are the three main 'simple types' in TypeScript?",
        choices : ["object,array,symbol", "array, object,boolean", "boolean,number,string", "object,string,number"]
    },
    {
        name: "question2",
        type: "list",
        message: "What type of assignment is this variable, `const fullName: string = 'Dylan Israel';`?",
        choices: ["implicit", "explicit"]
    },
    {
        name: "question3",
        type : "list",
        message: "TypeScript can always correctly infer a variables type",
        choices : ["true", "false"] 
    },
    {
        name: "question4",
        type: "list",
        message: "______ is similar to 'any', but a safer alternative when uncertain about the type.",
        choices: ["never", "similar", "unknown"]
    },
    {
        name: "question5",
        type: "list",
        message: "What is the inherited type for the variable example in `const example = ['Dylan']`?",
        choices: ["string", "any[]", "string[]", "unknown[]"]
    }
]);


let score: number = 0;

switch(quiz.question1){
    case "boolean,number,string":
        console.log("Question1: correct");
        ++score;
        break;
        default:
            console.log("Question1: incorrect");
}

switch(quiz.question2){
    case "explicit":
        console.log("Question2: correct")
        ++score
        break;
        default:
            console.log("Question2: incorrect");
}

switch(quiz.question3){
    case "false":
        console.log("Question3: correct")
        ++score
        break;
        default:
            console.log("Question3: incorrect")
}

switch(quiz.question4){
    case "unknown":
        console.log("Question4: correct")
        ++score
        break;
        default:
            console.log("Question4: incorrect")
}

switch(quiz.question5){
    case "string[]":
        console.log("Question1: correct")
        ++score
        break;
        default:
            console.log("Question5 incorrect")
}

console.log(` your score is :${score}`)