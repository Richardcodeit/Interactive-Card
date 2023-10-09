const cardName = document.getElementById("cardName")
const cardNumber = document.getElementById("cardNumber")
const month = document.getElementById("month")
const year = document.getElementById("year")
const cvc = document.getElementById("cvc")
const cardNumPara = document.querySelector(".caldnumber")
const cardNamePara = document.querySelector(".cardname")
const cardMonthPara = document.querySelector(".month")
const cardYearPara = document.querySelector(".year")
const cardCvcPara = document.querySelector(".cvc")
let maxlength = 16
cardNumber.addEventListener("input" , function( ) {
  cardValue= cardNumber.value
  if(cardValue.length > maxlength){
      cardValue = cardValue.slice(0 , maxlength)
    }
    if(cardValue.length >= maxlength){
        cardNumber.disabled = true;
        setTimeout(function() {
            cardNumber.disabled = false;
          }, 1000); //
      }
  const formate = []
    for(let i = 0 ; i < cardValue.length ; i++){
          formate.push(cardValue[i])
          if((i + 1) % 4 === 0 && i !== cardValue.length){
            formate.push(" ")
          }
    }
    cardValue = formate.join("")
    cardNumPara.textContent  = cardValue
  
})
cardName.addEventListener("input" , ()=>{
  cardNamePara.textContent = cardName.value
})
month.addEventListener("input" , ()=>{
  let length = 2
  if (month.value.length > 2){
    month.value = month.value.slice(0 , length)
  }
  cardMonthPara.textContent = month.value
})
year.addEventListener("input" , ()=>{
  let length = 2
  if (year.value.length > 2){
    year.value = year.value.slice(0 , length)
  }
  cardYearPara.textContent = year.value
}) 
cvc.addEventListener("input" , ()=>{
  let length = 3
  if (cvc.value.length > 2){
    cvc.value = cvc.value.slice(0 , length)
  }
  cardCvcPara.textContent = cvc.value
})
