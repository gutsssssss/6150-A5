
// Listen for changes on the "Do you live in the United States?" checkbox
document.getElementById('usResident').addEventListener('change', function() {
  let zipGroup = document.getElementById('zipGroup'); // Get the ZIP code input container

  if (this.checked) {
    zipGroup.style.display = 'block'; // Show ZIP code field if checked
  } else {
    zipGroup.style.display = 'none'; // Hide ZIP code field if unchecked
    document.getElementById('zip').value = ''; // Clear ZIP code input value
  }
});

// Listen for form submission
document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  let name = document.getElementById('name').value.trim(); // Trim whitespace
  let birthYear = document.getElementById('birthYear').value;
  let usResident = document.getElementById('usResident').checked;
  let zip = document.getElementById('zip').value;
  let password = document.getElementById('password').value;
  let pizzaSelected = document.querySelector('input[name="pizza"]:checked'); // Get selected radio button

  let errors = false; // Track if there are any validation errors

  // Validate Name (at least 3 characters)
  if (name.length < 3) {
    document.getElementById('nameError').innerText = 'Name must be at least 3 characters.';
    errors = true;
  } else {
    document.getElementById('nameError').innerText = '';
  }

  // Validate Year of Birth (must be > 1900 and < current year)
  let currentYear = new Date().getFullYear();
  if (birthYear <= 1900 || birthYear >= currentYear || isNaN(birthYear)) {
    document.getElementById('birthYearError').innerText = 'Enter a valid year.';
    errors = true;
  } else {
    document.getElementById('birthYearError').innerText = '';
  }

  // Validate ZIP Code (if US resident, it must be 5 digits)
  if (usResident && !/^[0-9]{5}$/.test(zip)) {
    document.getElementById('zipError').innerText = 'ZIP code must be 5 digits.';
    errors = true;
  } else {
    document.getElementById('zipError').innerText = '';
  }

  // Validate Password (at least 8 characters)
  if (password.length < 8) {
    document.getElementById('passwordError').innerText = 'Password must be at least 8 characters.';
    errors = true;
  } else {
    document.getElementById('passwordError').innerText = '';
  }

  // Validate Pizza Preference (one must be selected)
  if (!pizzaSelected) {
    document.getElementById('pizzaError').innerText = 'Select a pizza preference.';
    errors = true;
  } else {
    document.getElementById('pizzaError').innerText = '';
  }

  // If no errors, submit the form and display success message
  if (!errors) {
    document.getElementById('registrationForm').style.display = 'none'; // Hide form
    document.getElementById('successMessage').style.display = 'block'; // Show success message
  }
});
