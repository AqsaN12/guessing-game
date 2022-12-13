#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner";
import { clearScreenDown } from "readline";
let score = 0;
let play = true;
(async () => {
    await showBanner('Guessing Game', 'Guess to WIN', "red");
})();
clearScreenDown;
async function guessingNumber() {
    while (play) {
        let randomNumber = Math.ceil((Math.random() * 9) + 1);
        //console.log(randomNumber)
        let answer = await inquirer.prompt([{
                name: "userNumber",
                type: "number",
                message: "Enter any Number from 1 to 10",
            }]);
        if (answer.userNumber === randomNumber) {
            console.log(chalk.green("you guess a right number"));
            score += 10;
            console.log(chalk.yellow(score));
        }
        else {
            console.log(chalk.red("try again!!"));
            play = false;
        }
    }
}
setTimeout(() => {
    guessingNumber();
}, 1000);
