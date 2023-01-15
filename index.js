let count = 0
let gcount = 0
let homeScore = document.getElementById("home_score")
let guestScore = document.getElementById("guest_score")


function increment1(){
    count = count + 1
    if(count<10){
    homeScore.textContent = "0" + count
    }
    else
   homeScore.textContent = count
}

function increment2(){
    count = count + 2
    if(count<10){
    homeScore.textContent = "0" + count
    }
    else
   homeScore.textContent = count
}

function increment3(){
    count = count + 3
    if(count<10){
    homeScore.textContent = "0" + count
    }
    else
   homeScore.textContent = count
}

function gincrement1(){
    gcount = gcount + 1
    if(gcount<10){
    guestScore.textContent = "0" + gcount
    }
    else
   guestScore.textContent = gcount
}

function gincrement2(){
    gcount = gcount + 2
    if(gcount<10){
    guestScore.textContent = "0" + gcount
    }
    else
   guestScore.textContent = gcount
}

function gincrement3(){
    gcount = gcount + 3
    if(gcount<10){
    guestScore.textContent = "0" + gcount
    }
    else
   guestScore.textContent = gcount
}
function refresh(){
    count = 0
    gcount = 0
    homeScore.textContent = "0" + count
    guestScore.textContent = "0" + gcount
}

