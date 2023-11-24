            
            //LOGIN VALIDATIONS STARTS HERE
            function validation(){
                var logmail = document.getElementById("log-mail").value;
                var logpass = document.getElementById("log-pass").value;

                var letters = /^[A-Za-z_]+$/;
                //var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
                var upper_case = /^(?=.*?[A-Z])/;
                var lower_case = /^(?=.*?[a-z])/;
                var numbers = /^(?=.*?[0-9])/;
                var special = /^(?=.*?[#?!@$%^&*-])/;

                //EMPTY LOGIN NAME VALIDATION
                if(logmail=="")
                {
                    document.getElementById("validlogmail").innerHTML="Enter Username*";
                    document.getElementById("validlogpass").innerHTML="";
                    document.getElementById("log-mail").focus();
                    return(false);
                }
                //LOGIN NAME CHARACTERS VALIDATION
                // else if(!letters.test(logmail))
                // {
                //     document.getElementById("validlogmail").innerHTML="Only Letters & Underscore allowed*";
                //     document.getElementById("validlogpass").innerHTML="";
                //     document.getElementById("log-mail").focus();
                //     return(false);
                // }
                //LOGIN NAME LENGTH VALIDATION
                else if(logmail.length<=7)
                {
                    document.getElementById("validlogmail").innerHTML="Min 8 characters required*";
                    document.getElementById("validlogpass").innerHTML="";
                    document.getElementById("log-mail").focus();
                    return(false);
                }
                //LOGIN NAME LENGTH VALIDATION
                else if(logmail.length>=80)
                {
                    document.getElementById("validlogmail").innerHTML="Max 80 characters allowed*";
                    document.getElementById("validlogpass").innerHTML="";
                    document.getElementById("log-mail").focus();
                    return(false);
                }
                //EMPTY LOGIN PASS VALIDATION
                else if(logpass=="")
                {
                    document.getElementById("validlogpass").innerHTML="Enter Password*";
                    document.getElementById("validlogmail").innerHTML="";
                    document.getElementById("log-pass").focus();
                    return(false);
                }
                //LOGIN PASSWORD LENGTH VALIDATION
                else if(logpass.length<=7)
                {
                    document.getElementById("validlogpass").innerHTML="Min 8 characters required*";
                    document.getElementById("validlogmail").innerHTML="";
                    document.getElementById("log-pass").focus();
                    return(false);
                }
                //LOGIN PASSWORD LENGTH VALIDATION
                else if(logpass.length>=16)
                {
                    document.getElementById("validlogpass").innerHTML="Max 15 characters allowed*";
                    document.getElementById("validlogmail").innerHTML="";
                    document.getElementById("log-pass").focus();
                    return(false);
                }
                //PASSWORD CHARACTERS VALIDATION
                else if(!upper_case.test(logpass))
                {
                    document.getElementById("validlogpass").innerHTML="Upper case required*";
                    document.getElementById("validlogmail").innerHTML="";
                    document.getElementById("log-pass").focus();
                    return(false);
                }
                else if(!lower_case.test(logpass))
                {
                    document.getElementById("validlogpass").innerHTML="Lower case required*";
                    document.getElementById("validlogmail").innerHTML="";
                    document.getElementById("log-pass").focus();
                    return(false);
                }
                else if(!numbers.test(logpass))
                {
                    document.getElementById("validlogpass").innerHTML="Numeric characters are required*";
                    document.getElementById("validlogmail").innerHTML="";
                    document.getElementById("log-pass").focus();
                    return(false);
                }
                else if(!special.test(logpass))
                {
                    document.getElementById("validlogpass").innerHTML="Special characters are required*";
                    document.getElementById("validlogmail").innerHTML="";
                    document.getElementById("log-pass").focus();
                    return(false);
                }
                else if(logmail==logpass)
                {
                    document.getElementById("validlogpass").innerHTML="Username and Password cannot be the same*";
                    document.getElementById("validlogmail").innerHTML="";
                    document.getElementById("log-pass").focus();
                    return(false);
                }

                else
                {
                    alert("Checking Login Details..!!!");
                }
                return(true);
            }
            //LOGIN VALIDATIONS ENDS HERE


            //REGISTER VALIDATIONS STARTS HERE
            function validation1(){
                var letters = /^[A-Za-z]+$/;
	    	    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                var upper_case = /^(?=.*?[A-Z])/;
                var lower_case = /^(?=.*?[a-z])/;
                var numbers = /^(?=.*?[0-9])/;
                var special = /^(?=.*?[#?!@$%^&*-])/;

                var regname = document.getElementById("reg-name").value;
                var regemail = document.getElementById("reg-id").value;
                var regpass = document.getElementById("reg-pass").value;
                var regcpass = document.getElementById("reg-Cpass").value;

                //EMPTY USERNAME VALIDATION
                if(regname=="")
                {
                    document.getElementById("validuser").innerHTML="Enter Username*";
                    document.getElementById("reg-name").focus();
                    document.getElementById("validemail").innerHTML="";
                    document.getElementById("validpwd").innerHTML="";
                    document.getElementById("validcpwd").innerHTML="";
                    return(false);
                }
                //USERNAME CHARACTERS VALIDATION
                else if(!letters.test(regname))
                {
                    document.getElementById("validuser").innerHTML="Only Letters allowed*"
                    document.getElementById("validemail").innerHTML="";
                    document.getElementById("validpwd").innerHTML="";
                    document.getElementById("validcpwd").innerHTML="";
                    document.getElementById("reg-name").focus();
                    return(false);
                }
                //USERNAME LENGTH VALIDATION
                else if(regname.length<=7)
                {
                    document.getElementById("validuser").innerHTML="Min 8 characters required*"
                    document.getElementById("validemail").innerHTML="";
                    document.getElementById("validpwd").innerHTML="";
                    document.getElementById("validcpwd").innerHTML="";
                    document.getElementById("reg-name").focus();
                    return(false);
                }
                //USERNAME LENGTH VALIDATION
                else if(regname.length>=16)
                {
                    document.getElementById("validuser").innerHTML="Max 15 characters allowed"
                    document.getElementById("validemail").innerHTML="";
                    document.getElementById("validpwd").innerHTML="";
                    document.getElementById("validcpwd").innerHTML="";
                    document.getElementById("reg-name").focus();
                    return(false);
                }
                //EMPTY EMAIL VALIDATION
                else if(regemail=="")
                {
                    document.getElementById("validemail").innerHTML="Enter Email*";
                    document.getElementById("reg-id").focus();
                    document.getElementById("validuser").innerHTML="";
                    document.getElementById("validpwd").innerHTML="";
                    document.getElementById("validcpwd").innerHTML="";
                    return(false);
                }
                //EMAIL CHARACTERS VALIDATION
                else if(!filter.test(regemail))
                {
                    document.getElementById("validuser").innerHTML=""
                    document.getElementById("validemail").innerHTML="Invalid Email Id";
                    document.getElementById("validpwd").innerHTML="";
                    document.getElementById("validcpwd").innerHTML="";
                    document.getElementById("reg-id").focus();
                    return(false);
                }
                //EMPTY PASSWORD VALIDATION
                else if(regpass=="")
                {
                    document.getElementById("validpwd").innerHTML="Enter Password*";
                    document.getElementById("reg-pass").focus();
                    document.getElementById("validuser").innerHTML="";
                    document.getElementById("validemail").innerHTML="";
                    document.getElementById("validcpwd").innerHTML="";
                    return(false);
                }
                //PASSWORD CHARACTERS VALIDATION
                else if(!upper_case.test(regpass))
                {
                    document.getElementById("validuser").innerHTML=""
                    document.getElementById("validemail").innerHTML="";
                    document.getElementById("validpwd").innerHTML="Upper case required*";
                    document.getElementById("validcpwd").innerHTML="";
                    document.getElementById("reg-pass").focus();
                    return(false);
                }
                //PASSWORD CHARACTERS VALIDATION
                else if(!lower_case.test(regpass))
                {
                    document.getElementById("validuser").innerHTML=""
                    document.getElementById("validemail").innerHTML="";
                    document.getElementById("validpwd").innerHTML="Lower case required*";
                    document.getElementById("validcpwd").innerHTML="";
                    document.getElementById("reg-pass").focus();
                    return(false);
                }
                //PASSWORD CHARACTERS VALIDATION
                else if(!numbers.test(regpass))
                {
                    document.getElementById("validuser").innerHTML=""
                    document.getElementById("validemail").innerHTML="";
                    document.getElementById("validpwd").innerHTML="Numeric characters are required*";
                    document.getElementById("validcpwd").innerHTML="";
                    document.getElementById("reg-pass").focus();
                    return(false);
                }
                //PASSWORD CHARACTERS VALIDATION
                else if(!special.test(regpass))
                {
                    document.getElementById("validuser").innerHTML=""
                    document.getElementById("validemail").innerHTML="";
                    document.getElementById("validpwd").innerHTML="Special character are required*";
                    document.getElementById("validcpwd").innerHTML="";
                    document.getElementById("reg-pass").focus();
                    return(false);
                }
                //PASSWORD LENGTH VALIDATION
                else if(regpass.length<=7)
                {
                    document.getElementById("validuser").innerHTML=""
                    document.getElementById("validemail").innerHTML="";
                    document.getElementById("validpwd").innerHTML="Minimum 8 characters required*";
                    document.getElementById("validcpwd").innerHTML="";
                    document.getElementById("reg-pass").focus();
                    return(false);
                }
                //PASSWORD LENGTH VALIDATION
                else if(regpass.length>=16)
                {
                    document.getElementById("validuser").innerHTML=""
                    document.getElementById("validemail").innerHTML="";
                    document.getElementById("validpwd").innerHTML="Maximum 15 characters allowed*";
                    document.getElementById("validcpwd").innerHTML="";
                    document.getElementById("reg-pass").focus();
                    return(false);
                }
                //EMPTY CONFIRM PASSWORD VALIDATION
                else if(regcpass=="")
                {
                    document.getElementById("validcpwd").innerHTML="Confirm Password*";
                    document.getElementById("reg-Cpass").focus();
                    document.getElementById("validuser").innerHTML="";
                    document.getElementById("validemail").innerHTML="";
                    document.getElementById("validpwd").innerHTML="";
                    return(false);
                }
                //PASSWORD MATCHING VALIDATION
                else if(regpass!=regcpass)
                {
                    document.getElementById("validuser").innerHTML=""
                    document.getElementById("validemail").innerHTML="";
                    document.getElementById("validpwd").innerHTML="";
                    document.getElementById("validcpwd").innerHTML="Password Unmatched";
                    document.getElementById("reg-Cpass").focus();
                    return(false);
                }
                else if(regname==regpass)
                {
                    document.getElementById("validuser").innerHTML=""
                    document.getElementById("validemail").innerHTML="";
                    document.getElementById("validpwd").innerHTML="Username and Password cannot be the same*";
                    document.getElementById("validcpwd").innerHTML="";
                    document.getElementById("reg-Cpass").focus();
                    return(false);
                }
                else
                {
                    alert("Validating Details.....");
                }
                return(true);
            }
            //REGISTER VALIDATIONS ENDS HERE



//PASSWORD STRENGTH CHECKER CODE ENDS HERE!!!!!!!!!!!!!!!!!!!!!!!!!

// timeout before a callback is called
let timeout;
// traversing the DOM and getting the input and span using their IDs
let password = document.getElementById("reg-pass");
let strengthBadge = document.getElementById('StrengthDisp');
// The strong and weak password Regex pattern checker
let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{10,})');
let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{10,}))');

function StrengthChecker(PasswordParameter)
{
    // We then change the badge's color and text based on the password strength

    if(strongPassword.test(PasswordParameter)) {
        strengthBadge.style.backgroundColor = "green"
        strengthBadge.textContent = 'Strong'
    } else if(mediumPassword.test(PasswordParameter)){
        strengthBadge.style.backgroundColor = 'blue'
        strengthBadge.textContent = 'Medium'
    } else{
        strengthBadge.style.backgroundColor = 'red'
        strengthBadge.textContent = 'Weak'
    }
}

// Adding an input event listener when a user types to the  password input 
password.addEventListener("input", () => {
//The badge is hidden by default, so we show it
strengthBadge.style.display= 'block'
clearTimeout(timeout);

//We then call the StrengChecker function as a callback then pass the typed password to it
timeout = setTimeout(() => StrengthChecker(password.value), 500);

//Incase a user clears the text, the badge is hidden again
if(password.value.length !== 0)
{
    strengthBadge.style.display != 'block'
} 
else
{
    strengthBadge.style.display = 'none'
}
});
//PASSWORD STRENGTH CHECKER CODE ENDS HERE!!!!!!!!!!!!!!!!!!!!!!!!!




            //JAVASCRIPT FOR SWITCHING BETWEEN Login and Register STARTS HERE
            function register()
            {
                var x = document.getElementById("login");
                var y = document.getElementById("register");
                var z = document.getElementById("btn");
                x.style.left = "-400px";
                y.style.left = "50px";
                z.style.left = "110px";
            }
            function login()
            {
                var x = document.getElementById("login");
                var y = document.getElementById("register");
                var z = document.getElementById("btn");
                x.style.left = "50px";
                y.style.left = "450px";
                z.style.left = "0";
            }
            //JAVASCRIPT FOR SWITCHING BETWEEN Login and Register ENDS HERE

            
//Toogle Between Password Visibility Code Starts//
            function ShowPass()
    {
        var x = document.getElementById("reg-pass");
        if (x.type == "password")
        {
            x.type = "text";
        }
        else
        {
            x.type = "password";
        }
    }
    function ShowCPass()
    {
        var x = document.getElementById("reg-Cpass");
        if (x.type == "password")
        {
            x.type = "text";
        }
        else
        {
            x.type = "password";
        }
    }
    //Toogle Between Password Visibility Script Code Ends//