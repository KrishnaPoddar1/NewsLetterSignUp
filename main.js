const form = document.getElementById("form");
const card = document.getElementsByClassName("card");
const email = document.getElementById("email");
const errormessage = document.getElementsByClassName("error-message");
const success = document.getElementsByClassName("success");
const emailInput = document.getElementById("email-value");
const dismiss = document.getElementById("Dismiss");


form.addEventListener("submit", function (e){
    
    e.preventDefault();

    const emailvalue = email.value;

    console.log(emailvalue);

    if(!isValidEmail(emailvalue)){
        errormessage[0].textContent = "Valid Email Required";
        return;
    }

    card[0].classList.add("hidden");
    success[0].classList.remove("hidden");
    emailInput.textContent = emailvalue;

    form.reset();

});

dismiss.addEventListener('click',function(){
    success[0].classList.add("hidden");
    card[0].classList.remove("hidden");
});

function isValidEmail(emailvalue) {
    /*
    const emailExpression = /^[a-zA-Z]+[0-9]*@([a-zA-Z]+)\.[a-zA-Z]+$\;
    */
    const emailExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailExpression.test(emailvalue);
}