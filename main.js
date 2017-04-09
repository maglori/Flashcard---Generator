var BasicCard = require('./BasicCard');
var ClozeCard = require('./ClozeCard');
var inquirer = require('inquirer')

var president = BasicCard("Who is the first president of the United States?", "George Washington");
// president["displayFront"]();
// president["displayBack"]();

var presidentCloze = ClozeCard("George Washington is the first president of the United States.", "George Washington");
presidentCloze["cloze-deleter"]();

var makeCards = function() {
    console.log("Press Control and C together at any time to exit!")
    inquirer.prompt([
                {
                    name: "card-type",
                    type: "list",
                    message: "What kind of flash card do you want to make?",
                    choices: ["Basic (Question on the front, answer on back.", "Cloze-deleted (Sentence missing a key word on front, missing word on the back"]
                }
            ]).then(function(answers) {
                var choice = answers;
                if (choice["card-type"] === "Basic (Question on the front, answer on back.") {
                    inquirer.prompt([
                        {
                            name: "name",
                            type: "input", 
                            message: "Name your card!"
                        },
                        {
                            name: "question",
                            type: "input",
                            message: "Input the question you want on the front of the card."
                        },
                        {
                            name: "answer",
                            type: "input",
                            message: "Input the answer! And don't forget it, sucker!"
                        }
                    ]).then(function(answers){
                        var question = answers.question;
                        var answer = answers.answer;
                        var newCard = BasicCard(question, answer);
                        console.log(newCard);
                        makeCards();
                    });
                } else {
                    inquirer.prompt([
                        {
                            name: "question",
                            type: "input",
                            message: "Input the FULL statement you want to remember. We'll handle the cloze-deletion."
                        },
                        {
                            name: "answer",
                            type: "input",
                            message: "Input the answer (the word or phrase you wish to be cloze-deleted)! And don't forget it, sucker!"
                        }
                    ]).then(function(answers){
                        var question = answers.question;
                        var answer = answers.answer;
                        var newCard = ClozeCard(question, answer);
                        newCard["cloze-deleter"]();
                        console.log(newCard);
                        makeCards();
                    });
                }
            });
};

var frontend = function() { 
    inquirer.prompt([
        {
            name: "function",
            type: "list",
            message: "What do you want to do?",
            choices: ["Make cards", "Study!"]
        },
    ]).then(function(answers) {
        var choice = answers.function;
        if (choice.trim() == "Make cards"){
            console.log("We can make cards, but we can't study with the cards you make just yet. \n But don't worry, we've prepared some special study questions just for you.")
            makeCards();
        } 
        else {
            console.log("LET'S STUDY BABYYYY!")
            inquirer.prompt([
                {
                    name: "Basic", 
                    type: "input",
                    message: "Question: " + president["front"]
                },
                {
                    name: "Cloze",
                    type: "input",
                    message: "Question: " + presidentCloze["partial"]
                }
            ]).then(function(answers){  
                var choices = answers;
                var correct = 0;
                if (choices.Basic.toLowerCase() === president["back"].toLowerCase()) {
                    correct++
                }
                if (choices.Cloze.toLowerCase() === presidentCloze["cloze"].toLowerCase()){
                    correct++
                }
                console.log("You got " + correct + " correct!")
            });
        };
    });
}


frontend();