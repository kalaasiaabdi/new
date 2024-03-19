 
let sum =0
let cards=[]
let message = " "
let isAlive=false 
let hasBlackJack=false 
let sumEl=document.getElementById("sum-el")
let messageEl=document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")


function getRandomNumber(){
    let randomNumber=Math.floor(Math.random()*13)+1
    if( randomNumber > 10 ){
        return 10
    } else if (randomNumber===1){
        return 1
    } else{
        return randomNumber
    }
}




function startDonating(){
    let firstCard=getRandomNumber()
    let secondCard=getRandomNumber()
    sum =firstCard + secondCard
    cards=[ firstCard,secondCard]
    renderGame()


}
function renderGame(){
cardsEl.textContent=" TOTAL DONATION:"
for( let i = 0 ; i < cards.length ; i ++){
    cardsEl.textContent+=cards[i]
}
    sumEl.textContent=" NUMBER OF PEOPLE:" + sum
    if( sum< 21){
        message=" WHOOO DONATED!"
    }
    else if (sum===21){
        message=" LET'S GO"
    }
    else {
        message=" FANTASTIC"
    }
    messageEl.textContent=message

  
}
function newDonation(){
    
        let card=getRandomNumber()
        sum+=card
        cards.push(card)
        console.log(cards)
        renderGame()
    }


