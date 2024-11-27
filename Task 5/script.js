// const userArray=[];

// const form=document.querySelector('#form');
// const aftersubmit=document.querySelector('#aftersubmit');

// form=addEventListener('submit',function(event){

//     event.preventDefault();

//     const username=document.getElementById('username').value;
//     const fathername=document.getElementById('fathername').value;
//     const  email=document.getElementById('email').value;
//     const address=document.getElementById('address').value;    
//     const contact=document.getElementById('contact').value;

//     const user={username,fathername, email,address,contact};
//     userArray.push(user);
//     displaylist();
// });

// function displaylist(){
//     aftersubmit.innerHTML=' ';
//     userArray.forEach(user =>{

//         const div=document.createElement('div')
//         div.classList.add('.user-info')

//         div.innerHTML=` <strong>${user.username}</strong>
//         <strong>${user.fathername}</strong>
//         <strong>${user.email}</strong>
//         <strong>${user.address}</strong>
//         <strong>${user.contact}</strong>`

//         aftersubmit.appendChild(div)
//     });
// }

    // again
let arr =[];
const form =document.querySelector("#form");
const aftersubmit = document.querySelector("#aftersubmit");
const submitbtn = document.querySelector("#submit");

form.addEventListener("submit" , function(e){
    e.preventDefault();

    const username = document.querySelector("#username").value;
    const fathername = document.querySelector("#fathername").value;
    const email = document.querySelector("#email").value;
    const address= document.querySelector("#address").value;
    const contact = document.querySelector("#contact").value;

    let objectuser = {
        username , fathername , email , address , contact
    }

    arr.push(objectuser);

    displayform();
});

function displayform(){
    aftersubmit.innerHTML =" ";
    arr.forEach(objectuser =>{
        const div = document.createElement("div");
        div.classList.add(".user-info");

        div.innerHTML =`${objectuser.username}`
        div.innerHTML =`${objectuser.fathername}`
        div.innerHTML =`${objectuser.email}`
        div.innerHTML =`${objectuser.address}`
        div.innerHTML =`${objectuser.contact}`

        aftersubmit.appendChild(div);
    });

};

