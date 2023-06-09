//                  HASAN'S CARD GAME
/*  The rules for this game will be that the player
    starts by having been assigned a card randomly 
    from 2 to king, with Ace being high. 
    They have a choice to stick with their card or 
    draw a new card. Then the AI opponent can do the 
    same. 
    The player with the highest card wins.

*/

const readline = require('readline')

const deckGen = ()=>{
    return Array.from({length:52}, (_,i)=> i+1)
    
}

const shuffleDeck= deck=>{
    let shuffle=[]
    let len = deck.length
    for(let i =0; i<len ; i++){
        //console.log(deck.length)
        let card = deck.splice(Math.floor(Math.random()*deck.length),1)[0]
        shuffle.push(card)
    }
    return shuffle
}

const game = async (deck) =>{
    let playerCard = deck.splice(0,1)[0]
    let oppCard = deck.splice(0,1)[0]
    console.log(oppCard)
    
    console.log(`You card is ${playerCard}, would you like to draw a new card? (y/n)`)
    interface(playerCard,oppCard,deck)
}
const oppDecision=(oppCard,deck)=>{
    console.log("hi")
    return [oppCard<30?deck.splice(0,1)[0]:oppCard,deck]
}

const interface =(playerCard,oppCard,deck)=>{
    readline.emitKeypressEvents(process.stdin)
    if (process.stdin.setRawMode !=null ) process.stdin.setRawMode(true)
    //this listens to key press
    process.stdin.on("keypress",(str,key)=>{
        if(key.name =="y"){
            process.stdin.pause()
            playerCard = deck.splice(0,1)[0]
            console.log(`Your new Card is: ${playerCard}`)
            const [newoppCard, newdeck] = oppDecision(oppCard,deck)
            winLose(playerCard,newoppCard)}
        else if (key.name=="n") {
            process.stdin.pause()
            const [newoppCard,newdeck] = oppDecision(oppCard,deck)
            winLose(playerCard,newoppCard)}
            else{
                process.stdin.pause()
                console.log("PRESS Y OR N")
                interface(playerCard,oppCard)
            }
        })    
    
}

const winLose=(player,opp)=>{
    if (player>opp){
        console.log("You win!")
        console.log(`You had : ${player}`)
        console.log(`Opponent had : ${opp}`)
    }else if(player===opp){
        console.log("draw")
    }else{console.log("YOU LOSE!")
        console.log(`You had : ${player}`)
        console.log(`Opponent had : ${opp}`) }
}

//make a deck and then shuffle it
let deck = deckGen()
deck = shuffleDeck(deck)

game(deck)
