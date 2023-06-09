//                  HASAN'S CARD GAME
/*  The rules for this game will be that the player
    starts by having been assigned a card randomly 
    from 2 to king, with Ace being high. 
    They have a choice to stick with their card or 
    draw a new card. Then the AI opponent can do the 
    same. 
    The player with the highest card wins.

*/
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

const game = deck =>{
    let playerCard = deck.splice(0,1)[0]
    let oppCard = deck.splice(0,1)[0]
    console.log(playerCard)
    console.log(oppCard)
    console.log(deck)

}

let deck = deckGen()

deck = shuffleDeck(deck)
game(deck)
