

const form = document.querySelector('#form')
let username = form.username;
let password = form.password;

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    loginData.username = username.value
    loginData.password = password.value
})



form.reset()

module.exports = {
    loginData
}