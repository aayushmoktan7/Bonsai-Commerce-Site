// this block is used for form validation in contact us
function validateform() {
  var fname = document.forms["contactform"]["fullname"].value;
  var address = document.forms["contactform"]["address"].value;
  var phone = document.forms["contactform"]["phonenumber"].value;
  var email = document.forms["contactform"]["email"].value;
  var message = document.forms["contactform"]["message"].value;

  if (fname == "" || address == "" || email == "" || message == "") {
    alert("The field cannot be left empty. Please fill the form correctly");
  }

  else {
    alert("Thank you for your message!!!");
  }


}

// this block is used to give a message after clicking buy button

function thankYou() {
  alert("Thank you for Purchasing!!!");
}