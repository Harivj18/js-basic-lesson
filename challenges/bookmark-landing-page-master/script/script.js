// var input;
function myFunction(input) {
  if (input === "arrow1") {
    var show = document.getElementById("answer1");
    if (show.style.display === "none") {
      show.style.display = "flex";
    } else {
      show.style.display = "none";
    }
  } else if (input === "arrow2") {
    var show = document.getElementById("answer2");
    if (show.style.display === "none") {
      show.style.display = "flex";
    } else {
      show.style.display = "none";
    }
  } else if (input === "arrow3") {
    var show = document.getElementById("answer3");
    if (show.style.display === "none") {
      show.style.display = "flex";
    } else {
      show.style.display = "none";
    }
  } else if (input === "arrow4") {
    var show = document.getElementById("answer4");
    if (show.style.display === "none") {
      show.style.display = "flex";
    } else {
      show.style.display = "none";
    }
  } else {
    var show = document.getElementById("answer5");
    if (show.style.display === "none") {
      show.style.display = "flex";
    } else {
      show.style.display = "none";
    }
  }
}
function ValidateEmail(input) {
  var Req =
    /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
  if (input.value.match(Req)) {
    return true;
  } else {
    document.getElementById("msg").style.display = "block";
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