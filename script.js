var submit = document.getElementById("submit");


function clickSubmit() {
  var res = true;
  var spanName = document.getElementById("spanName");
  var Name = document.getElementById("name");

  var email = document.getElementById("email");
  var spanEmail = document.getElementById("spanEmail");

  var password = document.getElementById("password");
  var spanPassword = document.getElementById("spanPassword");

  var mobile = document.getElementById("mobile");
  var spanMobile = document.getElementById("spanMobile");

  if (Name.value == "") {
    spanName.style.display = "inline";

    res = false;
  } else {
    spanName.style.display = "none";
  }
  if (email.value == "") {
    spanEmail.style.display = "inline";

    res = false;
  } else {
    spanEmail.style.display = "none";
  }
  if (password.value == "") {
    spanPassword.style.display = "inline";

    res = false;
  } else {
    spanPassword.style.display = "none";
  }
  if (mobile.value == "") {
    spanMobile.style.display = "inline";

    res = false;
  } else {
    spanMobile.style.display = "none";
  }

  return res;
}
