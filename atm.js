function atm () {
  let withdrawn = parseInt(prompt("How much cash you want to withdrawn"))
  let currentBalance = 1000
  let withdrawnAction = currentBalance - withdrawn

  if (currentBalance < withdrawn) {
    console.log("You dont have enough money")
  } else if (currentBalance >= withdrawn){
    console.log(`You withdrawn ${withdrawn} Money left on the account ${withdrawnAction}`)
  } else {
    console.log("ATM accepts only NUMBERS")
  }

  
}

atm()
