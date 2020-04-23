function validateForm(){
    
     
     var Username=document.getElementById('Username').value;
     var Pass=document.getElementById('Pass').value;
    
    
    
    if (Username ==null || Username==""){
        alert("All fields are required");
        return false;
    }
    else if( Pass.length<8)
    {
        alert("Password should be of 8 or more than 8 characters");
        return false;
    }
    else if(Username=="chauhan.monalika" && Pass==23456789)
    {
        alert("Login sucessful");
        window.location="Aboutme.html";
    }

    

    else {
       alert("Login successful");
       window.location="Aboutme.html";
    }

}