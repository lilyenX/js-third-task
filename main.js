import {increment, reset} from './counter.js'

// --Counter--
const new_increment = document.querySelector('.increment-btn')
const new_reset = document.querySelector('.reset-btn')
const counter_p = document.querySelector('.p-counter')


new_increment.addEventListener('click', ()=>{
    // const newCount= increment()
    counter_p.textContent=`Current Count: ${increment()}`
})
new_reset.addEventListener('click', () =>{
    // const zeroValue=reset()
    counter_p.textContent=`Current Count: ${reset()}`
})


//--Form--
const forSubmit = document.querySelector('.form-submit')
const errorParag = document.querySelector('.errorP')
const welcomeParag = document.querySelector('.welcomeP')
const inputName = document.querySelector('.name-input')

forSubmit.addEventListener('submit', (e)=>{
    e.preventDefault()
    const inputUser = inputName.value 

    if(inputUser.length>=3){
        welcomeParag.textContent=`Welcome: ${inputUser}!`
        welcomeParag.style.color ='green'
        errorParag.textContent=''
    } else{
        errorParag.textContent=`Error: Please enter at least 3 characters`
        errorParag.style.color = 'red'
        welcomeParag.textContent=''
    }
})

// inputName.addEventListener('input', (e)=>{
//     const inputUser=e.target.value

//     if(inputUser.length>=3){
//         welcomeParag.textContent=`Welcome: ${inputUser}!`
//         welcomeParag.style.color ='green'
//         errorParag.textContent=''
//     } else{
//         errorParag.textContent=`Error: Please enter at least 3 characters`
//         errorParag.style.color = 'red'
//         welcomeParag.textContent=''
//     }
// })
