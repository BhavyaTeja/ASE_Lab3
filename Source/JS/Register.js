/**
 * Created by BhavyaTeja on 2/7/2017.
 * @return {boolean}
 */

function Submit(){
    var emailRegex = /^[A-Za-z0-9._]*\@[A-Za-z]*\.[A-Za-z]{2,5}$/;
    var fname = document.form.Name.value,
        femail = document.form.Email.value,
        freemail = document.form.enterEmail.value,
        fpassword = document.form.Password.value,

    if (fname == "" )
    {
        document.form.Name.focus() ;
        document.getElementById("errorBox").innerHTML = "enter the first name";
        return false;
    }

    if (femail == "" )
    {
        document.form.Email.focus();
        document.getElementById("errorBox").innerHTML = "enter the email";
        return false;
    }else if(!emailRegex.test(femail)){
        document.form.Email.focus();
        document.getElementById("errorBox").innerHTML = "enter the valid email";
        return false;
    }

    if (freemail == "" )
    {
        document.form.enterEmail.focus();
        document.getElementById("errorBox").innerHTML = "Re-enter the email";
        return false;
    }else if(!emailRegex.test(freemail)){
        window.location.replace("Home.html");
        document.form.enterEmail.focus();
        document.getElementById("errorBox").innerHTML = "Re-enter the valid email";
        return false;
    }

    if(freemail !=  femail){
        window.location.replace("Home.html");
        document.form.enterEmail.focus();
        document.getElementById("errorBox").innerHTML = "emails are not matching, re-enter again";
        return false;
    }

    if(fpassword == "")
    {
        window.location.replace("Home.html");
        document.form.Password.focus();
        document.getElementById("errorBox").innerHTML = "enter the password";
        return false;
    }
    }
    if(fname != '' && femail != '' && freemail != '' && fpassword != '')
    {
        window.location.replace("Home.html");
        document.getElementById("errorBox").innerHTML = "form submitted successfully";

    }

}