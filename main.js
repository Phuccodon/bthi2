let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let name = id("name"),
    password = id("password"),
    email = id("email"),
    phone = id("phone"),
    errorMsg = classes("error"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");
   
    form.addEventListener("button", (e) => {
        e.preventDefault();
        engine(name, 0, "Ten  khong hop le");
        engine(email, 1, "Email khong hop le");
        engine(password, 2, "mat khau khong hop le");
        engine(phone, 3, "so dien thoai khong hop le");
       
       
        
    });
    let engine = (id, serial, message) => {
        if(id.value.trim()==="") {
            errorMsg[serial].innerHTML = message;
            id.style.border="2px solid red";
            failureIcon[serial].style.opacity="1";
            successIcon[serial].style.opacity="0";
        } else {
            errorMsg[serial].innerHTML="";
            id.style.border="2px solid green";
            failureIcon[serial].style.opacity="0";
            successIcon[serial].style.opacity="1";
        }
    }
