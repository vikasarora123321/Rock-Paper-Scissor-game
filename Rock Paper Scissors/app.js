let images = document.querySelectorAll('.images');
let user_score = document.querySelector(".user_score")
let com_score = document.querySelector(".com_score")
let draw_msg = document.querySelector("#draw-msg-container")
let win_msg = document.querySelector("#win-msg-container")
let lose_msg = document.querySelector("#lose-msg-container")
let user_choice = 0, com_choice = 0
com_score.value = 0
user_score.value = 0

function checkwin() {
    console.log(user_choice, com_choice)
    if(user_choice == com_choice){
        win_msg.hidden = true
        lose_msg.hidden = true
        draw_msg.hidden = false
    }
    else if((user_choice == 0 && com_choice == 2) || (user_choice == 1 && com_choice == 0) || (user_choice == 2 && com_choice == 1)){
        user_score.value++;
        win_msg.hidden = false
        lose_msg.hidden = true
        draw_msg.hidden = true
    }
    else{
        com_score.value++;
        win_msg.hidden = true
        lose_msg.hidden = false
        draw_msg.hidden = true
    }
}
const image_border0 = () =>{
    images[0].style.border = '2px solid black'
    images[1].style.border = 'none'
    images[2].style.border = 'none'
    com_choice = Math.floor(Math.random()*3)
    user_choice = 0
    checkwin()
}
const image_border1 = () =>{
    images[1].style.border = '2px solid black'
    images[0].style.border = 'none'
    images[2].style.border = 'none'
    com_choice = Math.floor(Math.random()*3)
    user_choice = 1
    checkwin()
}
const image_border2 = () =>{
    images[2].style.border = '2px solid black'
    images[0].style.border = 'none'
    images[1].style.border = 'none'
    com_choice = Math.floor(Math.random()*3)
    user_choice = 2
    checkwin()
}

images[0].addEventListener("click",image_border0)
images[1].addEventListener("click",image_border1)
images[2].addEventListener("click",image_border2)




