function setName() {
  const name = document.getElementById("nameInput").value;
  if (name) {
    document.getElementById("welcomeText").innerText =
      `Hi ${name}! Welcome to FM Digital Solutions`;
  }
}

function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("messageText").value;

  if (!name || !email || !phone || !message) {
    alert("Please fill in all fields!");
    return false;
  }

  document.getElementById("result").innerHTML = `
    <h3>Thank you 💜</h3>
    <p><b>Name:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Message:</b> ${message}</p>
  `;
  return false;
}

const sections = document.querySelectorAll(".section");

function revealSections() {
  sections.forEach(section => {
    const position = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
      section.style.transition = "all 0.8s ease";
    }
  });
}

function validateForm() {

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const message = document.getElementById("messageText");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const phoneError = document.getElementById("phoneError");
  const messageError = document.getElementById("messageError");

  nameError.innerText = "";
  emailError.innerText = "";
  phoneError.innerText = "";
  messageError.innerText = "";

  name.classList.remove("error-border");
  email.classList.remove("error-border");
  phone.classList.remove("error-border");
  message.classList.remove("error-border");

  let isValid = true;

  if (name.value.trim() === "") {
    nameError.innerText = "Name wajib diisi";
    name.classList.add("error-border");
    isValid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value.trim() === "") {
    emailError.innerText = "Email wajib diisi";
    email.classList.add("error-border");
    isValid = false;
  } else if (!emailPattern.test(email.value)) {
    emailError.innerText = "Format email tidak valid";
    email.classList.add("error-border");
    isValid = false;
  }

  if (phone.value.trim() === "") {
    phoneError.innerText = "Nomor HP wajib diisi";
    phone.classList.add("error-border");
    isValid = false;
  } else if (isNaN(phone.value)) {
    phoneError.innerText = "Nomor HP harus berupa angka";
    phone.classList.add("error-border");
    isValid = false;
  } else if (phone.value.length < 10) {
    phoneError.innerText = "Nomor HP minimal 10 digit";
    phone.classList.add("error-border");
    isValid = false;
  }

  if (message.value.trim() === "") {
    messageError.innerText = "Message wajib diisi";
    message.classList.add("error-border");
    isValid = false;
  }

  if (!isValid) {
    return false;
  }

  document.getElementById("result").innerHTML = `
    <h3>Submitted Data</h3>
    <p><b>Name:</b> ${name.value}</p>
    <p><b>Email:</b> ${email.value}</p>
    <p><b>Phone:</b> ${phone.value}</p>
    <p><b>Message:</b> ${message.value}</p>
  `;

  return false;
}

window.addEventListener("load", revealSections);
window.addEventListener("scroll", revealSections);
