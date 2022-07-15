$(document).ready(function(){
    $('.clicks').on('click',function(){
        $('#box').toggleClass('show');
    });

    $('#close').on('click',function(){
        $('#box').removeClass('show');
    });


    var submit = document.querySelector("#submission");

submit.addEventListener("click", (event) => {
  var user = user_verification();
  var email = email_verification();
  if (user && email) {
    return true;
  }
  event.preventDefault();
  return false;
});

var username = document.querySelector("#uname");
username.addEventListener("input", () => {
  user_verification();
});

var email = document.querySelector("#mail");
email.addEventListener("input", () => {
  email_verification();
});

function user_verification() {
  var username = document.querySelector("#username");
  if (username.value.length < 3) {
    document.querySelector("#user_invalid").innerHTML =
      "Input is Less Than 3 Characters";
    document.querySelector("#user_invalid").style.display = "Block";
    return false;
  }
  document.querySelector("#user_invalid").style.display = "none";
  return true;
}

function email_verification() {
  var reg = new RegExp("^([-.0-9a-zA-Z]+)@([-.0-9a-zA-Z]+).([a-zA-Z]){2,7}$");
  var email = document.querySelector("#Email").value;
  if (email.length == "") {
    document.querySelector("#email_invalid").innerHTML = "Please Enter Email";
    document.querySelector("#email_invalid").style.display = "Block";
    return false;
  }
  if (!reg.test(email)) {
    document.querySelector("#email_invalid").innerHTML = "Email is Invalid";
    document.querySelector("#email_invalid").style.display = "Block";
    return false;
  }
  document.querySelector("#email_invalid").style.display = "none";
  return true;
}
});
