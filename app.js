const fs = require('fs');
const readline = require('readline');
const { generateGreeting } = require('./greetings');

// create interface to read user input from the command line
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//prompt user for the name
rl.question('What is your name? ', (name) => {
    const greeting = generateGreeting(name);
    
    fs.writeFile('output.txt', greeting, (err) => {
        if(err){
            console.error("Error writing to the file: ", err);
            return;
        }
        console.log('Greeting saved to output.txt successfully');
    })
    rl.close();
})
