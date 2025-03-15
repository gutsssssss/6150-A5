document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registrationForm");
  const usResidentCheckbox = document.getElementById("usResident");
  const zipcodeGroup = document.getElementById("zipcodeGroup");
  const zipcodeInput = document.getElementById("zipcode");
  const acceptedMessage = document.getElementById("acceptedMessage");

  // Toggle Zipcode Field
  usResidentCheckbox.addEventListener("change", function () {
    if (this.checked) {
      zipcodeGroup.style.display = "block";
      zipcodeInput.setAttribute("required", true);
    } else {
      zipcodeGroup.style.display = "none";
      zipcodeInput.removeAttribute("required");
    }
  });

  // Form Validation
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let isValid = true;

    // Validate Name
    const nameInput = document.getElementById("name");
    if (nameInput.value.length < 3) {
      document.getElementById("nameError").style.display = "block";
      isValid = false;
    } else {
      document.getElementById("nameError").style.display = "none";
    }

    // Validate Year of Birth
    const yearOfBirthInput = document.getElementById("yearOfBirth");
    const currentYear = new Date().getFullYear();
    if (
      yearOfBirthInput.value < 1900 ||
      yearOfBirthInput.value >= currentYear
    ) {
      document.getElementById("yearOfBirthError").style.display = "block";
      isValid = false;
    } else {
      document.getElementById("yearOfBirthError").style.display = "none";
    }

    // Validate Zipcode (if applicable)
    if (usResidentCheckbox.checked && !/^\d{5}$/.test(zipcodeInput.value)) {
      document.getElementById("zipcodeError").style.display = "block";
      isValid = false;
    } else {
      document.getElementById("zipcodeError").style.display = "none";
    }

    // Validate Password
    const passwordInput = document.getElementById("password");
    if (passwordInput.value.length < 8) {
      document.getElementById("passwordError").style.display = "block";
      isValid = false;
    } else {
      document.getElementById("passwordError").style.display = "none";
    }

    // Validate Pizza Type
    const pizzaTypeInputs = document.querySelectorAll('input[name="pizzaType"]');
    let pizzaTypeSelected = false;
    pizzaTypeInputs.forEach((input) => {
      if (input.checked) pizzaTypeSelected = true;
    });
    if (!pizzaTypeSelected) {
      document.getElementById("pizzaTypeError").style.display = "block";
      isValid = false;
    } else {
      document.getElementById("pizzaTypeError").style.display = "none";
    }

    // Show Accepted Message if Valid
    if (isValid) {
      form.style.display = "none";
      acceptedMessage.style.display = "block";
    }
  });
});