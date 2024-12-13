
let letters = "abcdefghijklmnopqrstuvwxyz".toUpperCase()

let letterCont = document.querySelector(".letters")

let arryLetters = Array.from(letters)

//// append letters to page

arryLetters.forEach(letter =>{

let span = document.createElement("span") 

span.appendChild(document.createTextNode(letter))

span.classList.add("letter")

letterCont.appendChild(span)

})


/////// object of words

const words = {
    programming:["html" , "css" , "java script" , "php" , "laravel" , "my sql"],
    movies: ["end game" , "avengers" , "avatar" , "kong fo panda" , "intsller"],
    people:["mohamed ahmed" , "ahmed" , "abdo" , "mahmoud" , "amin"],
    countries: [ "egypt" , "ksa" , "usa" , "uek" ,"lepanon"]
}


let allKeys = Object.keys(words)

let randomPropNum = Math.floor(Math.random() * allKeys.length)
let randomPropKey = allKeys[randomPropNum]
let randomPropValue = words[randomPropKey]

let randomWordNum = Math.floor(Math.random() * randomPropValue.length)
let randomWordValue = randomPropValue[randomWordNum]
console.log(randomWordValue)

document.querySelector(".category span").innerHTML = randomPropKey 

let guessLetter = document.querySelector(".guess-letters")

let spaceAndLetter = Array.from(randomWordValue)

spaceAndLetter.forEach((ele , letterIndex) =>{

    let span = document.createElement("span")
    
    
    if(ele == " "){
        span.classList.add("space")
    }
    guessLetter.appendChild(span)
    
})

let guessLetterSpan = document.querySelectorAll(".guess-letters span")
let hangMan = document.querySelector(".hangman-cont")
let wrong = 0 ;

document.addEventListener("click" , (e) =>{
    let guessLetterSpan = document.querySelectorAll(".guess-letters span")
    let check= false ;

    if(e.target.classList.contains("letter")){
        
        spaceAndLetter.forEach((ele , wordind) =>{

            e.target.classList.add("false-clicked")

            if(e.target.innerHTML.toLowerCase() === ele){
                e.target.classList.add("true-clicked")

                guessLetterSpan.forEach((span , indexspan) =>{
                    if(wordind == indexspan){
                        check = true
                    span.appendChild(document.createTextNode(ele))
                    }
                })
            }
        })
        if(check !== true){
            wrong++
            if(wrong <= 8 ){
                hangMan.classList.add(`wrong-${wrong}`)
            }
            if(wrong == 8){
                createPopup("Game Over The Word Is : ")
                letterCont.classList.add("stop-click")
            }
        }
    }

    
    let checkGuess = 0
    let arrSpace = []
    let arrInner = []
    spaceAndLetter.forEach((space) =>{
        
        if(space == " "){
            arrSpace.push(space)
        }
    })
    guessLetterSpan.forEach((span , index) =>{
        if(span.innerHTML !== ""){
            arrInner.push(span.innerHTML)
        }
        
    })
    
    
    if(arrInner.length == spaceAndLetter.length - arrSpace.length){
    createPopup("Wineer The Word IS : ")    


    letterCont.classList.add("stop-click")
}


 
    
    function createPopup(x){
                let div = document.createElement ("div")
        
            div.appendChild(document.createTextNode(`${x} ${randomWordValue}`))
        
            div.className = "popup"
    
            document.body.appendChild(div)    

            setTimeout(()=>{
                document.querySelector(".popup").remove()
            } , 3000)
    }
})

function closePoup(x) {
    if(x.className == "popup-close"){
        x.parentElement.remove()
}
}