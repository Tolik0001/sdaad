function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
let blocks = document.querySelectorAll(".block")
let counter = 1
let num = randomInteger(1,5)
blocks.forEach(block=>{
    counter++
    if(num == 0){
        num = randomInteger(1,5)
        block.innerHTML= "x"
    }else{num--}
})
