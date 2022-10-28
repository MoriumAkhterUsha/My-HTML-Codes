function validate()
{ 
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    if (email=="usha@gmail.com"&& password=="usha")
    {   console.log("huj");
        window.location.href = "account3.html";
        return false;
    }
    else
    {
       alert("login failed");
    }
}