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
    while (round < 6) {
        console.log(`it's round ${round}`)
        let me = get_human_choice()
        let com = get_computer_choice()

        if (me === com){
            console.log('its a tie!')
            
            /*round++*/
        } else if (me === 'rock' && com === 'paper' || me === 'paper' && com === 'scissors' || me === 'scissors' && com === 'rock') {
            console.log(`${com} beats ${me}! You lose!`)
            com_score++
            
            /*round++*/
            
        } else {
            console.log(`${me} beats ${com}! You win!`)
            my_score++
            
            /*round++*/

        }
        round++
        console.log(`Current score is ${my_score}:${com_score}`)
    } 
    console.log(`Game Over!`)
    console.log(`final score is ${my_score}:${com_score}`)
}
rps()

