function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
let blocks = document.querySelectorAll(".block")
let counter = 0
let num = randomInteger(1,5)
blocks.forEach(block=>{
    if(num == 0){
        num = randomInteger(1,5)
        block.innerHTML= "x"
        let arr = []
        arr.push(blocks[counter-1])
        arr.push(blocks[counter+1])
        arr.forEach(el =>{
            if (el.innerHTML == 'x'){

            }else{
                el.innerHTML = '1'
            }
        })

    }else{num--}
    block.addEventListener('click',function(e){
        console.log('click');
        block.style.backgroundColor = "red"
    });
    counter++

})




