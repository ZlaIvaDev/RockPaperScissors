console.log("hello from the other side")

let round = 1;
let my_score = 0;
let com_score = 0;
let score = `score is :${my_score}:${com_score}`;

function get_human_choice() {
    const choice = prompt("enter your choice: ")
    console.log(`your choice is ${choice}`)
    return choice

}

function get_computer_choice() {
    let computer_choice = Math.random()
    if (computer_choice < 0.334) {
        computer_choice = 'rock'
    } else if (computer_choice > 0.334 && computer_choice < 0.667) {
        computer_choice = 'paper'
    } else {
        computer_choice = 'scissors'
    }

    console.log(`com choice is ${computer_choice}`)
    return computer_choice

}

function rps() {

    console.log(`it's round ${round}`)
    let me = get_human_choice()
    let com = get_computer_choice()

    if (me === com){
        console.log('its a tie!')
        console.log(`${my_score}:${com_score}`)
        round++
    } else if (me === 'rock' && com === 'paper' || me === 'paper' && com === 'scissors' || me === 'scissors' && com === 'rock') {
        console.log(`${com} beats ${me}! You lose!`)
        com_score++
        console.log(`${my_score}:${com_score}`)
        round++
        
    } else {
        console.log(`${me} beats ${com}! You win!`)
        my_score++
        console.log(`${my_score}:${com_score}`)
        round++

    }
}

/* sledeci zadatak je da podesis Skor ! 

first few tries, placeholder code 
checking logic*/
/*
function rps() {


    get_human_choice()
    get_computer_choice()

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
    }
}
    */


/*

function rps() {

    if (get_human_choice() === get_computer_choice()){
        console.log('its a tie!')
        round++
        console.log(`${score}`)
    } else if (get_human_choice() === 'rock' && get_computer_choice() === 'paper') {
        console.log('paper beats rock, Com wins!')
        round++
        com_score++
        console.log(`${score}`)
    } else if (get_human_choice() === 'rock' && get_computer_choice() === 'scissors') {
        console.log('rock beats scissors, YOU win!')
        round++
        my_score++
        console.log(`${score}`)
    } else if (get_human_choice() === 'paper' && get_computer_choice() === 'scissors') {
        console.log('scissors beat paper, Com wins!')
        round++
        com_score++
        console.log(`${score}`)
    } else if (get_human_choice() === 'paper' && get_computer_choice() === 'rock') {
        console.log('paper beats rock, YOU win!')
        round++
        my_score++
        console.log(`${score}`)
    } else if (get_human_choice() === 'scissors' && get_computer_choice() === 'rock') {
        console.log('rock beats scissors, Com wins!')
        round++
        com_score++
        console.log(`${score}`)
    } else if (get_human_choice() === 'scissors' && get_computer_choice() === 'paper') {
        console.log('scissors beat paper, YOU win!')
        round++
        my_score++
        console.log(`${score}`)
    } 

    }

rps()

*/