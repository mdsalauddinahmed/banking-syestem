document.getElementById('btn-submit').addEventListener('click',function(){

    const emailField =document.getElementById('user-email');
    const email =emailField.value;
    // console.log(email)
    const passwordField = document.getElementById('user-password');
    const password =passwordField.value;
    // console.log(password)
    if(email==='amir@gmail.com'&& password==='hide123'){
         window.location.href='bank.html'
    }else{
         alert('confirm your email and password')
    }
})




