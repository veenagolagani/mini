function display() {
  const interview = document.getElementById("interview");
  const dateOutput = document.getElementById("selected-date");
  const value = interview.value;

  if (value) {
    const date = new Date(value);
    const dayName = date.toLocaleString('en-US', { weekday: 'long' });
    const monthName = date.toLocaleString('en-US', { month: 'long' });
    const year = date.getFullYear();
    dateOutput.innerText = `${dayName}, ${monthName} ${date.getDate()}, ${year}`;
  }
}

function clicked(event) {
  const slots = document.getElementsByClassName("slot");
  for (let slot of slots) {
    slot.style.backgroundColor = ""; // Reset others
  }
  event.target.style.backgroundColor = "rgb(122,172,224)";
}

document.getElementById("form").addEventListener("submit", function(event) {
  event.preventDefault();
  document.querySelectorAll('.incorrect').forEach(inp => inp.textContent = '');

  const firstname = document.getElementById('firstname').value.trim();
  const lastname = document.getElementById('lastname').value.trim();
  const email = document.getElementById('email').value.trim();
  const phn = document.getElementById('phn').value.trim();
  const position = document.getElementById('position').value.trim();
  const gender = document.querySelector('input[name="gender"]:checked')?.id || '';
  const city = document.getElementById('city').value;
  const startDate = document.getElementById('date').value;
  const interview = document.getElementById('interview').value;
  const selectedSlot = document.querySelector('.slot[style*="background-color"]')?.textContent || '';

  let valid = true;

  const fname = /^[A-Za-z ]{2,}$/;
  const lname = /^[A-Za-z ]{2,}$/;
  const em = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phone = /^[0-9]{10}$/;

  if (!firstname || !fname.test(firstname)) {
    document.getElementById('incorrectfname').textContent = 'Please enter a valid First name.';
    valid = false;
  }
  if (!lastname || !lname.test(lastname)) {
    document.getElementById('incorrectlname').textContent = 'Please enter a valid Last name.';
    valid = false;
  }
  if (!email || !em.test(email)) {
    document.getElementById('incorrectEmail').textContent = 'Please enter a valid email.';
    valid = false;
  }
  if (!phn || !phone.test(phn)) {
    document.getElementById('incorrectphn').textContent = 'Please enter a valid phone number.';
    valid = false;
  }
  if (!position) {
    document.getElementById('incorrectApl').textContent = 'Please enter the applied position.';
    valid = false;
  }

  if (valid) {
    localStorage.setItem('firstname', firstname);
    localStorage.setItem('lastname', lastname);
    localStorage.setItem('email', email);
    localStorage.setItem('phn', phn);
    localStorage.setItem('position', position);
    localStorage.setItem('gender', gender);
    localStorage.setItem('city', city);
    localStorage.setItem('startDate', startDate);
    localStorage.setItem('interview', interview);
    localStorage.setItem('slot', selectedSlot);

    document.getElementById("popup").style.display = "block";
    document.getElementById("form").reset();
// Clear file input and displayed file name
document.getElementById('resume').value = '';
document.getElementById('file-name').innerText = 'No file selected';
// Clear selected slot highlight
document.querySelectorAll('.slot').forEach(slot => {
  slot.style.backgroundColor = '';
});

    // Optional: remove stored data after successful submission
    // localStorage.clear();
  }
});

window.onload = function () {
  const fieldIds = ['firstname', 'lastname', 'email', 'phn', 'position'];
  fieldIds.forEach(id => {
    const value = localStorage.getItem(id);
    if (value) {
      document.getElementById(id).value = value;
    }
  });

  const gender = localStorage.getItem('gender');
  if (gender) {
    const genderInput = document.getElementById(gender);
    if (genderInput) genderInput.checked = true;
  }

  const city = localStorage.getItem('city');
  if (city) {
    document.getElementById('city').value = city;
  }

  const startDate = localStorage.getItem('startDate');
  if (startDate) {
    document.getElementById('date').value = startDate;
  }

  const interview = localStorage.getItem('interview');
  if (interview) {
    document.getElementById('interview').value = interview;
    display();
  }

  const slot = localStorage.getItem('slot');
  if (slot) {
    document.querySelectorAll('.slot').forEach(btn => {
      if (btn.textContent.trim() === slot) {
        btn.style.backgroundColor = "rgb(122,172,224)";
      }
    });
  }
  const resumeFile = localStorage.getItem('resumefile');
if (resumeFile) {
  document.getElementById('file-name').innerText = resumeFile;
}

};

document.getElementById("close").addEventListener("click", function () {
  document.getElementById("popup").style.display = "none";
});
// Handle file input
document.getElementById('resume').addEventListener('change', function(event) {
  const fileName = event.target.files[0] ? event.target.files[0].name : 'No file selected';
  document.getElementById('file-name').innerText = fileName;
  localStorage.setItem('resumefile', fileName);
});

// Trigger file input click when custom upload area is clicked
document.querySelector('.fileupload').addEventListener('click', function() {
  document.getElementById('resume').click();
});
