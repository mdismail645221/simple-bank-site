//step 1
document.getElementById('submit-btn').addEventListener('click', function () {
    //step 2
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step 3
    const userPassword = document.getElementById('user-password');
    const password = userPassword.value;
    // step 4
    if (email === 'mdismail645221@gmail.com' && password === 'ismail123') {
        window.location.href = 'http://127.0.0.1:5500/bank.html';
    } else {
        alert('Tor Password vule gecot.')
    }

})














// document.getElementById('submit-btn').addEventListener('click', function () {
//     //step: 01  get email user input access
//     const emailField = document.getElementById('user-email');
//     const email = emailField.value;
    
//     // step: 02 get the password input access
//     const passField = document.getElementById('user-password');
//     const password = passField.value;
    
//     // step: 03
//     if (email === 'mdismail645221@gmail.com' && password === 'raju') {
//         console.log('valid')
//     } else {
//         console.log('invalid')
//     }

// })