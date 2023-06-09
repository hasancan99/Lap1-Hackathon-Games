/** This is a Rock/Paper/Scissors Simulator
 *  The Sim gives a prompt for you game choice and simulates an opponent's decision and whether you 
 *  won, lost or drew. 
 *  When you lose the game you will be given your score 
 */
import colors from "ansi-colors" 
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';



let score=0


const question= async ()=>{
    const rl = readline.createInterface({ input, output });
    const answer = await rl.question('ROCK||PAPER||SCISSORS (R|P|S)');
    rl.close();
    console.log(typeof(answer))
    if(['R','r','P','p','S','s'].indexOf(answer)>=0){
        game(answer)
    }else{
        console.log(colors.magenta(`Please enter your choice as ${colors.bgBlue('R')} | ${colors.bgYellow('P')} | ${colors.bgGreenBright('S')}`))
        question()
    }
    
}



const opponentChoice =()=>{
    return Math.floor(Math.random()*3)
}

const convert=(answer)=>{
    if(answer=='R'||answer=='r'){
        return 0
    } else if (answer=='P'||answer=='p'){
        return 1
    } else{
        return 2
    }
}

const game=(answer)=>{
    let oppC=opponentChoice()
    console.log(oppC)
    let playerC=convert(answer)
    console.log(playerC)
    if (playerC===oppC){
        console.log(colors.yellow("Draw: choose again!"))
        question()
    } else if ((playerC===0 && oppC===2)||(playerC-oppC===1)){
        score++
        console.log(colors.green(`Winner: Your score is ${score}. Go again! R|P|S`))
        question()
    } else{
        console.log(colors.red(`LOSER: Your high score is ${score}. Play again!`))
        
    }
}

question()
