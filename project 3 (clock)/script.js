// const clock = document.querySelector("#clock");

// setInterval(function(){
//     let date = new Date();
//     clock.innerHTML = date.toLocaleTimeString();
// } , 1000)





const clock = document.querySelector("#clock");

setInterval(function() {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
},1000)