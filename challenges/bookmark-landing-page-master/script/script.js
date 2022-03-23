var input;
function myFunction(input) {
  if (input === "arrow1") {
    var x = document.getElementById("div1");
    if (x.style.display === "none") {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }
  } else if (input === "arrow2") {
    var x = document.getElementById("div2");
    if (x.style.display === "none") {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }
  } else if (input === "arrow3") {
    var x = document.getElementById("div3");
    if (x.style.display === "none") {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }
  } else if (input === "arrow4") {
    var x = document.getElementById("div4");
    if (x.style.display === "none") {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }
  } else {
    var x = document.getElementById("div5");
    if (x.style.display === "none") {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }
  }
}
function ValidateEmail(input) {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
  if (input.value.match(validRegex)) {
    return true;
  } else {
    document.getElementById("msg").style.display = "block";
    setTimeout(() => {
      emailMessage.style.display = "none";
    }, 1000);
    document.myForm.email.focus();
    event.preventDefault();
    return false;
  }
}

function bookmark() {
  document.getElementsByClassName("slider")[0].classList.add("active");
  document.getElementsByClassName("slider")[1].classList.remove("active");
  document.getElementsByClassName("slider")[2].classList.remove("active");
}
function search() {
  document.getElementsByClassName("slider")[0].classList.remove("active");
  document.getElementsByClassName("slider")[1].classList.add("active");
  document.getElementsByClassName("slider")[2].classList.remove("active");
}
function share() {
  document.getElementsByClassName("slider")[0].classList.remove("active");
  document.getElementsByClassName("slider")[1].classList.remove("active");
  document.getElementsByClassName("slider")[2].classList.add("active");
}