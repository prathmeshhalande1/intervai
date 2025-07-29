//FACH CALL FROM DATABASE
// async function dataComeFromDatabase() {
//   try {
//     const resp = await fetch('/read');
//     if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
//     const data = await resp.json();
//     console.table(data);
//   } catch (err) {

//     console.error('Fetch error:', err);
//   }
// }

// dataComeFromDatabase();

//LOGIN VALIDATION

document.querySelector(".signupBox form").addEventListener("submit", function (event) {
  event.preventDefault(); // Stop the form from submitting right away

  let name = document.getElementById("signupName").value.trim();
  let email = document.getElementById("signupEmail").value.trim();
  let password = document.getElementById("signupPassword").value.trim();
  let confirmPassword = document.getElementById("signupConfirmPassword").value.trim();

  if (!name || !email || !password || !confirmPassword) {
    alert("Please fill in all fields.");
    return;
  }

  if (!validateEmail(email)) {
    alert("Invalid email format.");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  // If all validation passes, submit the form manually
  loginsuccessful()
  this.submit();
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
}


document.getElementById('loginForm').addEventListener('submit', async function (e) {
  e.preventDefault(); // Stop the form from submitting

  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;

  try {
    const response = await fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    const result = await response.json();

    let message = '';
    if (result == 0) {
      message = 'Login successful';
      alert(message);

     
      this.submit(); 
    } else if (result == 1) {
      message = 'Incorrect password';
      alert(message);
    } else if (result == 2) {
      message = 'User does not exist';
      alert(message);
    }

  } catch (error) {
    console.error('Error:', error);
    alert("Login failed due to a server error.");
  }
});
