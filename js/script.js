// Typing animation

var typed = new Typed(".typing", {
  strings: [
    "",
    "Web Developer",
    "UI/UX Designer",
    "Undergraduate Student @BINUS",
  ],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});

var typeds = new Typed(".typings", {
  strings: [
    "",
    "Web Developer",
    "UI/UX Designer",
    "Undergraduate Student @BINUS",
  ],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});

const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length;
(allSection = document.querySelectorAll(".section")),
  (totalSection = allSection.length);

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    removeBackSection();

    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        addBackSection(j);
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}

function removeBackSection() {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("back-section");
  }
}

function addBackSection(num) {
  allSection[num].classList.add("back-section");
}

function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (
      target ===
      navList[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}

document.querySelector(".hire-me").addEventListener("click", function () {
  const sectionIndex = this.getAttribute("data-section-index");
  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
});

document.querySelector(".more-about-me").addEventListener("click", function () {
  const sectionIndex = this.getAttribute("data-section-index");
  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
});

const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}

function sendMail() {
  const submitError = document.querySelector("#submit-error"); // Ensure you have this element in your HTML

  // Validate form fields
  if (
    !validateName() ||
    !validateEmail() ||
    !validateSubject() ||
    !validateMessage()
  ) {
    submitError.style.display = "block";
    submitError.innerHTML = "Please enter the form correctly";
    setTimeout(() => {
      submitError.style.display = "none";
    }, 3000);
    return false;
  }

  // Initialize EmailJS
  //   emailjs.init("5OrdPYONW2myhPezj");

  // Prepare parameters for the email
  const params = {
    sendername: document.querySelector("#sendername").value,
    subject: document.querySelector("#subject").value,
    email: document.querySelector("#email").value,
    message: document.querySelector("#message").value,
    recipient_email: "fulgenciashaynalierue@gmail.com", // Add recipient email here if necessary
  };

  const serviceID = "service_pyyymx1";
  const templateID = "template_hrorymg";

  // Send the email
  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      // Success feedback
      console.log("Email sent successfully!", res.status, res.text);
      document.body.classList.add("active-popup");
      // Optionally clear form fields
      document.querySelector("#sendername").value = "";
      document.querySelector("#email").value = "";
      document.querySelector("#subject").value = "";
      document.querySelector("#message").value = "";
    })
    .catch((error) => {
      // Error handling
      console.error("Failed to send email:", error);
      submitError.style.display = "block";
      submitError.innerHTML = "Failed to send email. Please try again later.";
      setTimeout(() => {
        submitError.style.display = "none";
      }, 3000);
    });
}

function myFunction() {
  window.location.reload();
}

document
  .querySelector(".popup .close-btn")
  .addEventListener("click", function () {
    document.body.classList.remove("active-popup");
  });

var nameError = document.getElementById("name-error");
var emailError = document.getElementById("email-error");
var subjectError = document.getElementById("subject-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("btn send");

function validateName() {
  var name = document.getElementById("sendername").value;

  if (name.length == 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }

  nameError.innerHTML = "";
  return true;
}

function validateEmail() {
  var email = document.getElementById("email").value;

  if (email.length == 0) {
    emailError.innerHTML = "Email is required";
    return false;
  }

  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = "Email is invalid";
    return false;
  }

  emailError.innerHTML = "";
  return true;
}

function validateSubject() {
  var subject = document.getElementById("subject").value;

  if (subject.length == 0) {
    subjectError.innerHTML = "Subject is required";
    return false;
  }

  subjectError.innerHTML = "";
  return true;
}

function validateMessage() {
  var message = document.getElementById("message").value;
  var required = 20 - message.length;

  if (message.length == 0) {
    messageError.innerHTML = "Message is required";
    return false;
  }

  if (required > 0) {
    messageError.innerHTML = required + " more characters required";
    return false;
  }

  messageError.innerHTML = "";
  return true;
}
