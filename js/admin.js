//login 
function login(){
    let myEmail = document.getElementById("email").value;
    let myPass = document.getElementById("password").value;
    if(myEmail=="123@gmail.com" && myPass=="admin"){
        
        window.location.href="../html/admin.html";
    }else{
        alert("Đăng nhập thất bại");
    }
}

//mobile drawer
function openMenu(){
    document.getElementById("myMenuDrawer").style.width = "250px";
}

function closeMenu(){
    document.getElementById("myMenuDrawer").style.width = 0;
}

//drop down quan ly danh muc
var dropdownButton = document.getElementById('category')
  dropdownButton.addEventListener('click', function(event){
    event.preventDefault();
    let state = this.getAttribute('open');
    if (state){
        this.removeAttribute('open');
    }
    else {
        this.setAttribute('open', true)
    }
})


