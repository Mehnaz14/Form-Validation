console.log("This is project 1")
const firstname=document.getElementById('name');
const lastname=document.getElementById('name');
const email=document.getElementById('email');
const phone=document.getElementById('phone');
const collegename=document.getElementById('name');
let validEmail=false;
let validPhone=false;
let validFirstname=false;
let validLastname=false;
$('#failure').hide();
$('#success').show();
//console.log(firstname,lastname,email,phone,collegename);

firstname.addEventListener('blur', ()=>{
    console.log("name is blurred");
    let regex= /^[a-zA-Z]([0-9a-zA-Z]){0,10}$/;
    let str= firstname.value;
    console.log(regex,str);
    if(regex.test(str)){
        console.log('Your name is valid');
        firstname.classList.remove('is-invalid');
        validFirstname=true;
    }
    else{
        console.log('Your name is not valid');
        firstname.classList.add('is-invalid');
        validFirstname=false;
    }

})

lastname.addEventListener('blur', ()=>{
    console.log("name is blurred");
    let regex= /^[a-zA-Z]([0-9a-zA-Z]){0,10}$/;
    let str= lastname.value;
    console.log(regex,str);
    if(regex.test(str)){
        console.log('Your name is valid');
        lastname.classList.remove('is-invalid');
        validLastname=true;
    }
    else{
        console.log('Your name is not valid');
        lastname.classList.add('is-invalid');
        validLastname=false;
    }
})

email.addEventListener('blur', ()=>{
    console.log("email is blurred");
    let regex= /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str= email.value;
    console.log(regex,str);
    if(regex.test(str)){
        console.log('email is valid');
        email.classList.remove('is-invalid');
        validEmail=true;
    }
    else{
        console.log('email is not valid');
        email.classList.add('is-invalid');
        validEmail=false;
    }
})

phone.addEventListener('blur', ()=>{
    console.log("phone is blurred");
    let regex= /^([0-9]){10}$/;
    let str= phone.value;
    console.log(regex,str);
    if(regex.test(str)){
        console.log('phone is valid');
        phone.classList.remove('is-invalid');
        validPhone=true;
    }
    else{
        console.log('phone is not valid');
        phone.classList.add('is-invalid');
        validPhone=false;
    }
})

collegename.addEventListener('blur', ()=>{
    console.log("name is blurred");
})

let submit=document.getElementById('submit');
submit.addEventListener('click', (e)=>{
    e.preventDefault;
    console.log('you clicked on submit');
    console.log(validEmail,validphone,validFirstname,validLastname);
    if(validEmail && validPhone && validFirstname && validLastname){
        let failure=document.getElementById('failure');
        console.log('phone,email,first&last name are valid.Submitting the form');
        let success=document.getElementById('success');
        success.classList.add('show');
        //failure.classList.remove('show');
       // $('#failure').alert('close');
       $('#failure').hide();
       $("#success").show();
    }
    else{
        console.log('one of phone, email and first &last name are not valid. Hence not submitting the form .Please correct the ans and try again');
        let failure=document.getElementById('failure');
        failure.classList.add('show');
        //success.classList.remove('show');
        //success.alert('close');
        //$('#success').alert('hide');
        $('#success').hide();
        $('#failure').show();
    }
    
})