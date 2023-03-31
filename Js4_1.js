function saveDraft(){
  let emailInput = document.getElementById("email")
  let passwordInput = document.getElementById("password")
  let nameInput = document.getElementById("name")
  let countryInput = document.getElementById("country")
  let dateInput = document.getElementById("date")
  let obj = {
    "name": nameInput.value,
    "email": emailInput.value,
    "password": passwordInput.value,
    "country": countryInput.value,
    "date": dateInput.value
  };
  let jsonText = JSON.stringify(obj);
  localStorage.setItem("user", jsonText)
}

function checkPassword() {
  let jsonText = localStorage.getItem("user");
  let obj = JSON.parse(jsonText);

  let signInEmail = document.getElementById("email");
  let signInPass = document.getElementById("password");
  if (signInEmail.value !== null || signInPass.value !== null) {
    if (obj.email === signInEmail.value && obj.password === signInPass.value) {
      let Name = "<h5 style=\"padding-left: 10px;\">"+obj.name+"</h5>";
      document.getElementById("headl").innerHTML = Name;
      let logout = "<button id=\"login\" onClick=\"login()\" style=\"background-color: steelblue;color: lightblue; border: steelblue;\">"+
        "<h5 style=\"padding-left: 10px;padding-top: 4px;\">"+"Login"+"</h5>"+
      "</button>";
      document.getElementById("headr").innerHTML = logout;
      document.getElementById("welcome").innerHTML = "<h1>"+"Welcome "+obj.name+"</h1>";
      let Email = "<div style=\"padding-top: 20px\">"+"EMAIL:"+"</div>"+"<h4>"+obj.email+"</h4>";
      document.getElementById("divemail").innerHTML = Email;
      let Password = "<div>"+"PASSWORD:"+"</div>"+"<h4>"+obj.password+"</h4>";
      document.getElementById("divpassword").innerHTML = Password;
      let fullname = "<div>"+"FULL NAME:"+"</div>"+"<h4>"+obj.name+"</h4>";
      document.getElementById("divname").innerHTML = fullname;
      let Count = "<div>"+"COUNTRY:"+"</div>"+"<h4>"+obj.country+"</h4>";
      document.getElementById("divcountry").innerHTML = Count;
      let birthdate = "<div>"+"BIRTHDATE:"+"</div>"+"<h4>"+obj.date+"</h4>";
      document.getElementById("divdate").innerHTML = birthdate;
      document.getElementById("button").remove()
    } else {
      signInEmail.style.borderColor = "red";
      signInPass.style.borderColor = "red";
    }
  }
}
function login(){
  window.location.href = "Spring Task 4_2.html";
}
function register(){
  window.location.href = "Spring Task 4_1.html";
}
