
function setName() {
  const input = document.getElementById("nameInput");
  const welcomeText = document.getElementById("welcomeText");

  if (input.value.trim() !== "") {
    welcomeText.textContent = `Hi ${input.value}! Welcome to FM Digital Solutions`;
  }
}

const sections = document.querySelectorAll(".section");

function revealSections() {
  const triggerPoint = window.innerHeight - 100;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerPoint) {
      section.classList.add("show");
    }
  });
}

window.addEventListener("load", revealSections);
window.addEventListener("scroll", revealSections);

function validateForm() {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const message = document.getElementById("messageText");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const phoneError = document.getElementById("phoneError");
  const messageError = document.getElementById("messageError");

  [nameError, emailError, phoneError, messageError].forEach(e => e.textContent = "");
  [name, email, phone, message].forEach(i => i.classList.remove("error-border"));

  let isValid = true;

  if (name.value.trim() === "") {
    nameError.textContent = "Name wajib diisi";
    name.classList.add("error-border");
    isValid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value.trim() === "") {
    emailError.textContent = "Email wajib diisi";
    email.classList.add("error-border");
    isValid = false;
  } else if (!emailPattern.test(email.value)) {
    emailError.textContent = "Format email tidak valid";
    email.classList.add("error-border");
    isValid = false;
  }

  if (phone.value.trim() === "") {
    phoneError.textContent = "Nomor HP wajib diisi";
    phone.classList.add("error-border");
    isValid = false;
  } else if (!/^\d+$/.test(phone.value)) {
    phoneError.textContent = "Nomor HP harus berupa angka";
    phone.classList.add("error-border");
    isValid = false;
  } else if (phone.value.length < 10) {
    phoneError.textContent = "Nomor HP minimal 10 digit";
    phone.classList.add("error-border");
    isValid = false;
  }

  if (message.value.trim() === "") {
    messageError.textContent = "Message wajib diisi";
    message.classList.add("error-border");
    isValid = false;
  }

  if (!isValid) return false;

  document.getElementById("result").innerHTML = `
    <h3>Submitted Data</h3>
    <p><b>Name:</b> ${name.value}</p>
    <p><b>Email:</b> ${email.value}</p>
    <p><b>Phone:</b> ${phone.value}</p>
    <p><b>Message:</b> ${message.value}</p>
  `;

  return false;
}
