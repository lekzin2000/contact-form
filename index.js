let submitBtn=document.getElementById('submitBtn')
let inputField=document.querySelectorAll('.inputField')
let firstName = document.getElementById('firstName')
let firstNameError = document.getElementById('firstNameError')
let lastName = document.getElementById('lastName')
let lastNameError = document.getElementById('lastNameError')
let error =document.querySelector('.error')
let email=document.getElementById('email')
let emailError=document.getElementById('emailError')
let query1=document.getElementById('query1')
let query2=document.getElementById('query2')
let queryError=document.getElementById('queryError')
let messageField=document.getElementById('messageField')
let messageError=document.getElementById('messageError')
let consent=document.getElementById('consent')
let consentError=document.getElementById('consentError')
let queryOneDiv = document.getElementById('queryOne');
let queryTwoDiv = document.getElementById('queryTwo');
let alertContainer=document.getElementById('alertContainer')

submitBtn.addEventListener('click', function() {
    // console.log('hello');
    if (firstName.value===''){
        firstNameError.style.display='block'
        firstNameError.innerHTML='This field is required'
        firstName.style.borderColor='red'
     } 
    
     if (lastName.value===''){
        lastNameError.style.display='block'
        lastName.style.borderColor='red'
        lastNameError.innerHTML='This field is required'
     
     }
     if (messageField.value==='') {
        // alert('message field cannot be empty')
        messageError.style.display='block'
        messageField.style.borderColor='red'
        messageError.innerHTML='This field is required'
     }
     
      if (email.value.includes('@gmail.com')) {
        
     }else{
        emailError.innerHTML='Please enter a valid email addres'
        emailError.style.display='block'
        email.style.borderColor='red'
        
     }

     if (query1.checked || query2.checked) {
      queryError.style.display = 'none';
     } else {
        queryError.style.display='block'
        queryError.innerHTML='Please select a query type'
     }
     if (consent.checked) {
        
     } else{
        consentError.style.display='block'
        consentError.innerHTML='To submit this form, please consent to being contacted'
     }
    //  if (message.Value==='') {
    //     messageError.style.display='block'
    //     message.style.borderColor='red'
    //     messageError.innerHTML='This field is required'
    //  }
     
    if (firstName.value !=='' && lastName.value !=='' && email.value.includes('@gmail.com') && messageField.value!=='' && (query1.checked || query2.checked) && consent.checked) {
      //   alert('successful')
        alertContainer.style.display='block'
      //   window.location.reload()
    }
    
    const clearErrorMEssage=setInterval(() => {
        firstNameError.style.display='none'
        firstName.style.borderColor='black'
        lastNameError.style.display='none'
        lastName.style.borderColor='black'
        emailError.style.display='none'
        email.style.borderColor='black'
        queryError.style.display='none'
        messageField.style.borderColor='black'
        messageError.style.display='none'
        consentError.style.display='none'
        clearInterval(clearErrorMEssage)
    }, 2000);
})
function updateBackground() {
   if (query1.checked) {
       queryOneDiv.classList.add('selected');
       queryTwoDiv.classList.remove('selected');
   } else if (query2.checked) {
       queryTwoDiv.classList.add('selected');
       queryOneDiv.classList.remove('selected');
   }
}

query1.addEventListener('change', updateBackground);
query2.addEventListener('change', updateBackground);

// name.addEventListener('click', function(){
//     alert('hello')
// })
