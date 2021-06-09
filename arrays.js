//for loop challenge

let foods = ["apple", "orange", "rice", "bread", "tofu"]

//bronze - through loop backwards
for (let i=foods.length-1;i>=0;i--){
  console.log(foods[i])
}

//silver- console log with capital first letter
for (let i=foods.length-1;i>=0;i--){
  let word = foods[i]
  let first_letter= word[0].toUpperCase()
  let rest = word.slice(1)
  
  console.log(first_letter + rest)
}

//bronze+ silver+ console log only the odd indexed elements
for (let i=foods.length-1;i>=0;i--){
  if(i%2==0){
    let word = foods[i]
    let first_letter= word[0].toUpperCase()
    let rest = word.slice(1)
    
    console.log(first_letter + rest)
  }
}


//for..of loop challenge

//function that checks the length of a string and if its more than 4 characters, have it return true, else return false. console.log these from inside the for..of loop

function bigwords(foods){
  for (let elem of foods){
    if(elem.length>4){
      console.log("true")
      return true
    }
    else{
      console.log("false")
      return false
    }
  }
}

//alternative
for(let elem of foods){
  console.log(
    elem,
    foodAllergyCheck(food))
  let longWordResult = foodLengthCheck(food) ? "" : "not"
  let response = `${food} is ${longWordResult} a long word, and ${foodAllergyCheck(food).toLowerCase()} it with your allergies.`
}

function foodLengthCheck(food){
  return food.length>4
}

//write another function that takes in a food and the allergies array and will return "you can eat" if they can eat the item, otherwise return "you can't eat" Use this function in the loop also 
let allergies=["gluten", "soy"]

function foodAllergyCheck(food){
  //translates food to their underlying allergy
  allergyMap = {
    bread: "gluten",
    tofu: "soy"
  }

  //checks to see if the food is in the allergy map
  if(allergies.includes(allergyMap[food])){
    return "You can't eat"
  } else{
    return "You can eat"
  }

}

let cards = [2,8,"K",9,10,3,4,"Q",7,"J",5,6,"A"]
let faceCards = []
let numberCards = []

//write a loop that uses array push to fill the face card and numbered card elements from cards
function checkFace(cards){
  for(let elem of cards){
    if(typeof elem = "string"){
      faceCards.push(elem)
    }else{
      numberCards.push(elem)
    }
  }
}

//also empty the cards array as you go so in the end you should have an empty cards array and filled other arrays
//write a function that uses a switch to return the card type and use that in your code

function checkFace(cards){
  for(let elem of cards){
    let lastElem = cards.pop()
    if(typeof lastElem = "string"){
      faceCards.push(lastElem)
    }else{
      numberCards.push(lastElem)
    }
  }
}