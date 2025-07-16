function adminvalidation()
    {
        let user = document.getElementById("admin").value;
        let password = document.getElementById("pass").value;

        if(user=="admin123" && password == "admin123")
        {
          alert("admin login sucess...");
          window.location.href="index.html";
        }
        else
        {
            alert("invalid deatils..");
            window.location.href("admin.html");
        }
    }