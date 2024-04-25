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
        // Добавляем элемент слева и справа
        arr.push(blocks[counter-1])
        arr.push(blocks[counter+1])
        // Элемент слева и снизу
        if(counter>=10){
            arr.push(blocks[counter-10])
            arr.push(blocks[counter-11])
        }
        if(counter<70){
            arr.push(blocks[counter+10])
            arr.push(blocks[counter+9])
        }
        if(counter!=0 && counter!= 10 && counter!=20 && counter!=30 && counter!=40 && counter!=50 && counter!=60 && counter!=70 &&){
            arr.push(blocks[counter-9])
            arr.push(blocks[counter+11])
        }
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






