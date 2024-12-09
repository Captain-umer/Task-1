// const buttons =document.querySelectorAll("#button")
// const resetbtn =document.querySelector("#reset")
// const newbtn =document.querySelector("#new")
// const message =document.querySelector(".msg")
// const msgcontainer = document.querySelector("#msg-box");
// var winner1 = 2

// const winpattern =[
//     [0 ,1 ,2],
//     [0 ,3 ,6],
//     [0 ,4 ,8],
//     [1 ,4 ,7],
//     [2 ,5 ,8],
//     [2 ,4 ,6],
//     [3 ,4 ,5],
//     [6 ,7 ,8],
// ];

// let  turn0 = true;
// buttons.forEach((button)=>{
//     button.addEventListener("click" , ()=>{
//         if (winner1===1){
//             console.log('winner')
//         }
//         else{

//             if(turn0){
//                 button.innerText = "O"
//                 turn0 =false;
//             }
//             else{
//                 button.innerText = "X"
//                 turn0 = true;
//             }

//             button.disabled = true;
//             checkwinner();
//         }
//     });
// });

// const matchpattern =(winner)=>{
//     winner1 = 1
//     message.innerText = `congratulation , Winner is ${winner}`;
//     msgcontainer.classList.remove("hide")
// };

// const checkwinner =()=>{
//     for (let pattern of winpattern){
//         let pos1Val = buttons[pattern[0]].innerText;
//         let pos2Val = buttons[pattern[1]].innerText;
//         let pos3Val = buttons[pattern[2]].innerText;

//         if(pos1Val !="" && pos2Val != "" && pos3Val != ""){
//             if(pos1Val === pos2Val && pos2Val === pos3Val){
//                 matchpattern(pos1Val);
//             }
//         }
//     }
// }

// resetbtn.addEventListener("click" , ()=>{
//     winner1=2
//     turn0=true
//     buttons.forEach((item)=>{
//         item.innerHTML = ''
//         item.disabled = false;
//     })
//     msgcontainer.classList.add("hide")
// });

// newbtn.addEventListener("click" , ()=>{
//     winner1=2
//     turn0=true
//     buttons.forEach((item)=>{
//         item.innerHTML = ''
//         item.disabled = false;
//     })
//     msgcontainer.classList.add("hide")
// });

const buttons = document.querySelector("$button");

const winpattern =[
    [0 ,1 ,2],
    [0 ,3 ,6],
    [0 ,4 ,8],
    [1 ,4 ,7],
    [2 ,5 ,8],
    [2 ,4 ,6],
    [3 ,4 ,5],
    [6 ,7 ,8],
];
let  turn0 =true;
buttons.forEach((button)=>{
    button.addEventListener("click" , ()=>{
        if(turn0){
            button.innerText = "O"
            turn0 =false;
        }

        else{
            button.innerText = "X"
            turn0  = true;
        }

        button.disabled= true;
    })
})

const checkwinner =()=>{
    for (let pattern of winpattern){
        let pos1Val = buttons [pattern[0]].innerText
        let pos2Val = buttons [pattern[1]].innerText
        let pos3Val = buttons [pattern[2]].innerText
    }
}

