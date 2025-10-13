console.log("hello from the other side")

choice = prompt("enter your choice: ")
function rps() {
    
    let computer_choice = Math.random()
    if (computer_choice < 0.334) {
        computer_choice = 'rock'
    } else if (computer_choice > 0.334 && computer_choice < 0.667) {
        computer_choice = 'paper'
    } else {
        computer_choice = 'scissors'
    }

    console.log(`your choice is : ${choice}`)
    console.log(`comp choice is : ${computer_choice}`)
    
    

    if (choice === computer_choice){
        console.log('its a tie!')
    } else if (choice === 'rock' && computer_choice === 'paper') {
        console.log('paper beats rock, Com wins!')
    } else if (choice === 'rock' && computer_choice === 'scissors') {
        console.log('rock beats scissors, YOU win!')
    } else if (choice === 'paper' && computer_choice === 'scissors') {
        console.log('scissors beat paper, Com wins!')
    } else if (choice === 'paper' && computer_choice === 'rock') {
        console.log('paper beats rock, YOU win!')
    } else if (choice === 'scissors' && computer_choice === 'rock') {
        console.log('rock beats scissors, Com wins!')
    } else if (choice === 'scissors' && computer_choice === 'paper') {
        console.log('scissors beat paper, YOU win!')
    } /*else {
        console.log("INVALID CHOICE!") -> not necessary atm
    }*/
    }

rps()
/* sledeci zadatak je da podesis Skor ! */
