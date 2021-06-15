"use strict";

// TODO - write your code here.
const randomDamage = () => {
    return Math.floor((Math.random() * 10) + 1);
};

const chooseOption = (opt1, opt2) => {
    const randNum = Math.round(Math.random());
    return randNum === 0 ? opt1 : opt2;
};

const attackPlayer = function(health) {
    // returns a number equal to health minus the result of the randomDamage function
    return health - randomDamage();
};

const logHealth = (player, health) => {
    // console.log method to statethe following message: “playerhealth:health”.
    console.log(`${player} health: ${health}`);
};

const logDeath = (winner, loser) => {
    // console.log method to state the following message: “winner defeated loser”
    console.log(`${winner} defeated ${loser}`);
};

const isDead = (health) => {
    // returns a boolean value of true or false based on the following condition:health <= 0
    if (health <= 0) {
        return true;
    } else {
        return false;
    };
};

function fight(player1, player2, player1Health, player2Health) {
    //  write a while loop that loops while true
    while (true) {
         /* Declare and initialize a variable named attacker equal to the chooseOption function with player1 and player2 as arguments */
        let attacker = chooseOption(player1, player2);
        
        // If attacker is equal to player1
        if (attacker === player1) {
            // Set player2Health equal to the result of attackPlayer with player2Health as its argument.
            player2Health = attackPlayer(player2Health);
            //Calls the logHealth function with player2 and player2Healt has its arguments.
            logHealth(player2, player2Health);
            /* If the result of isDead with player2Health as an argument is true: 
                - Call the logDeath function with player1 and player2 as arguments.
                - Break */
                if (isDead(player2Health) === true) {
                    logDeath(player1, player2);
                    break;
                };

        } else {
            // Sets player1Health equal to the attackPlayer function with player1Healt has its argument
            player1Health = attackPlayer(player1Health);
            // Call the logHealth function with player1 and player1Health as its arguments
            logHealth(player1, player1Health);
            /* If the result of isDead with player1Health as an argument is true:
                - Call the logDeath function with player2 and player1 asarguments
                - Break */ 
            if (isDead(player1Health) === true) {
                logDeath(player2, player1);
                break;
            };
        };
    };
    /* call the fight function with the required four parameters. You pick the names and starting health. For example: player1: “Mitch”, player2: “Adam”, player1Health: 100, player2Health: 100 */
};
fight("Mitch", "Adam", 100, 100);