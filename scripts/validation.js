function validation() {
    var mail = document.getElementById("text").value;
    var errorText = document.querySelector('#texterror');
    var successdisplay = document.querySelector('#success');
    var inputemail = document.querySelector('#text');


    var regx = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

    if (mail.match(regx)) {
        document.getElementById("container").classList.toggle("container-none");
        successdisplay.classList.toggle("success-on");
    }
    else {
        let error = "Valid email required";
        errorText.append(error);
        inputemail.classList.toggle("error");
    }
}