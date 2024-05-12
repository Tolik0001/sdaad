function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
let blocks = document.querySelectorAll(".block")
let restart = document.querySelector(".Gameover")
let restartbtn = document.querySelector(".restart")
let counter = 0
let num = randomInteger(1,5)


blocks.forEach(block=>{
    block.setAttribute('id',counter)
    
//Заполнение клеток бомбами и единицами
    if(num == 0){
        num = randomInteger(1,5)
        block.innerHTML= "x"
        let arr = []
        // Добавляем элемент слева и справа
        // Элемент слева и снизу
        if(counter>=10){

            arr.push(blocks[counter-10])
            //console.log(String(counter).includes("0"))
            if(counter != 0 && counter != 10 && counter != 20 && counter != 30 && counter != 40 && counter != 50 && counter != 60 && counter != 70 ){
                arr.push(blocks[counter-11])  
            }if( counter != 0 && counter != 9 && counter != 19 && counter != 29 && counter != 39 && counter != 49 && counter != 59 && counter != 69 && counter != 79 ){
                arr.push(blocks[counter-9])  }
        }
        if(counter<70){
            arr.push(blocks[counter+10])
            if(counter != 0 && counter != 10 && counter != 20 && counter != 30 && counter != 40 && counter != 50 && counter != 60 && counter != 70 ){
                arr.push(blocks[counter+9])  
            }if( counter != 0 && counter != 9 && counter != 19 && counter != 29 && counter != 39 && counter != 49 && counter != 59 && counter != 69 && counter != 79 ){
                arr.push(blocks[counter+11])  }
        }
        if(counter != 0 && counter != 10 && counter != 20 && counter != 30 && counter != 40 && counter != 50 && counter != 60 && counter != 70 ){
            arr.push(blocks[counter-1])  
        }if( counter != 0 && counter != 9 && counter != 19 && counter != 29 && counter != 39 && counter != 49 && counter != 59 && counter != 69 && counter != 79 ){
            arr.push(blocks[counter+1])  
            arr.push(blocks[counter+1])  }
            console.log(arr)
            arr.forEach(el =>{
                if (el.innerHTML == 'x'){
        
                }else{
                    el.innerHTML = '1'
                }
            })
    }else{num--}
    

    console.log(blocks[counter]);

    //Клик по клетке
    blocks[counter].addEventListener('click',function(){
        
        console.log(counter);  
        if(block.innerHTML != "x"){
            blocks[counter].classList.remove("hidden")
            if(counter>=10){
                blocks[counter-10].classList.remove("hidden")
                //console.log(String(counter).includes("0"))
                if(counter != 0 && counter != 10 && counter != 20 && counter != 30 && counter != 40 && counter != 50 && counter != 60 && counter != 70 ){
                    blocks[counter-11].classList.remove("hidden")
                }if( counter != 0 && counter != 9 && counter != 19 && counter != 29 && counter != 39 && counter != 49 && counter != 59 && counter != 69 && counter != 79 ){
                    blocks[counter-9].classList.remove("hidden")
                }}
            if(counter<70){
                if(counter != 0 && counter != 10 && counter != 20 && counter != 30 && counter != 40 && counter != 50 && counter != 60 && counter != 70 ){  
                    blocks[counter+9].classList.remove("hidden")
                }if( counter != 0 && counter != 9 && counter != 19 && counter != 29 && counter != 39 && counter != 49 && counter != 59 && counter != 69 && counter != 79 ){
                    blocks[counter+11].classList.remove("hidden")
                }}
            if(counter != 0 && counter != 10 && counter != 20 && counter != 30 && counter != 40 && counter != 50 && counter != 60 && counter != 70 ){  
                blocks[counter-1].classList.remove("hidden")
            }if( counter != 0 && counter != 9 && counter != 19 && counter != 29 && counter != 39 && counter != 49 && counter != 59 && counter != 69 && counter != 79 ){
                blocks[counter+1].classList.remove("hidden")
            }else{
            //Проигрыш
        }}
    });
    counter++

})





function setEvent(){
    blocks.forEach(block =>{
        let counter = block.id
        console.log(blocks[counter]);

    //Клик по клетке
    block.addEventListener('click',function(){
        
        console.log(counter);  
        if(block.innerHTML != "x"){
            blocks[counter].classList.remove("hidden")
            if(counter>=10){
                blocks[counter-10].classList.remove("hidden")
                //console.log(String(counter).includes("0"))
                if(counter != 0 && counter != 10 && counter != 20 && counter != 30 && counter != 40 && counter != 50 && counter != 60 && counter != 70 ){
                    blocks[counter-11].classList.remove("hidden")
                }if( counter != 0 && counter != 9 && counter != 19 && counter != 29 && counter != 39 && counter != 49 && counter != 59 && counter != 69 && counter != 79 ){
                    blocks[counter-9].classList.remove("hidden")
                }}
            if(counter<70){
                if(counter != 0 && counter != 10 && counter != 20 && counter != 30 && counter != 40 && counter != 50 && counter != 60 && counter != 70 ){  
                    blocks[counter+9].classList.remove("hidden")
                }if( counter != 0 && counter != 9 && counter != 19 && counter != 29 && counter != 39 && counter != 49 && counter != 59 && counter != 69 && counter != 79 ){
                    blocks[counter+11].classList.remove("hidden")
                }}
            if(counter != 0 && counter != 10 && counter != 20 && counter != 30 && counter != 40 && counter != 50 && counter != 60 && counter != 70 ){  
                blocks[counter-1].classList.remove("hidden")
            }if( counter != 0 && counter != 9 && counter != 19 && counter != 29 && counter != 39 && counter != 49 && counter != 59 && counter != 69 && counter != 79 ){
                blocks[counter+1].classList.remove("hidden")
            }
        

        }else{
            //Проигрыш
            restart.style.display = "block"}
    });
    })
}

setEvent()















