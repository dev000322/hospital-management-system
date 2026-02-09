document.addEventListener("DOMContentLoaded", function () {

  // ======================
  // Elements
  // ======================
  const form = document.getElementById("regForm");

  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const mobile = document.getElementById("mobile");
  const email = document.getElementById("email");
  const department = document.getElementById("department");
  const blood = document.getElementById("blood");
  const address = document.getElementById("address");
  const terms = document.getElementById("terms");

  const statusBadge = document.getElementById("statusBadge");
  const hoverZone = document.getElementById("hoverZone");
  const finalMsg = document.getElementById("finalMsg");

  const registerBtn = document.getElementById("registerBtn");
  const resetBtn = document.getElementById("resetBtn");

  // Msg elements
  const userMsg = document.getElementById("userMsg");
  const passMsg = document.getElementById("passMsg");
  const mobileMsg = document.getElementById("mobileMsg");
  const emailMsg = document.getElementById("emailMsg");
  const deptMsg = document.getElementById("deptMsg");
  const bloodMsg = document.getElementById("bloodMsg");
  const addressMsg = document.getElementById("addressMsg");
  const genderMsg = document.getElementById("genderMsg");
  const serviceMsg = document.getElementById("serviceMsg");
  const termsMsg = document.getElementById("termsMsg");

  // ======================
  // Helpers
  // ======================
  function setBadge(text) {
    statusBadge.textContent = text;
  }

  function setError(el, msg) {
    el.className = "msg error";
    el.textContent = msg;
  }

  function setSuccess(el, msg) {
    el.className = "msg success";
    el.textContent = msg;
  }

  function clearMsg(el) {
    el.textContent = "";
  }

  // ======================
  // Validations
  // ======================
  function validateUsername() {
    const val = username.value.trim();
    const pattern = /^[A-Za-z0-9]+$/;

    if (val === "") {
      setError(userMsg, "Username cannot be empty.");
      return false;
    }
    if (!pattern.test(val)) {
      setError(userMsg, "Username must be alphanumeric only.");
      return false;
    }
    setSuccess(userMsg, "Username is valid.");
    return true;
  }

  function validatePassword() {
    const val = password.value.trim();
    if (val === "") {
      setError(passMsg, "Password cannot be empty.");
      return false;
    }
    if (val.length < 6) {
      setError(passMsg, "Minimum 6 characters required.");
      return false;
    }
    setSuccess(passMsg, "Password valid.");
    return true;
  }

  function validateMobile() {
    const val = mobile.value.trim();
    const pattern = /^[0-9]{10}$/;

    if (val === "") {
      setError(mobileMsg, "Mobile required.");
      return false;
    }
    if (!pattern.test(val)) {
      setError(mobileMsg, "Must be 10 digits.");
      return false;
    }
    setSuccess(mobileMsg, "Valid mobile.");
    return true;
  }

  function validateEmail() {
    const val = email.value.trim();
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (val === "") {
      setError(emailMsg, "Email required.");
      return false;
    }
    if (!pattern.test(val)) {
      setError(emailMsg, "Invalid email.");
      return false;
    }
    setSuccess(emailMsg, "Valid email.");
    return true;
  }

  function validateDepartment() {
    if (department.value === "") {
      setError(deptMsg, "Select department.");
      return false;
    }
    clearMsg(deptMsg);
    return true;
  }

  function validateBlood() {
    if (blood.value === "") {
      setError(bloodMsg, "Select blood group.");
      return false;
    }
    clearMsg(bloodMsg);
    return true;
  }

  function validateAddress() {
    if (address.value.trim() === "") {
      setError(addressMsg, "Address required.");
      return false;
    }
    setSuccess(addressMsg, "Valid address.");
    return true;
  }

  function validateGender() {
    const g = document.querySelector('input[name="gender"]:checked');
    if (!g) {
      setError(genderMsg, "Select gender.");
      return false;
    }
    clearMsg(genderMsg);
    return true;
  }

  function validateServices() {
    const checked =
      document.getElementById("srv1").checked ||
      document.getElementById("srv2").checked ||
      document.getElementById("srv3").checked;

    if (!checked) {
      setError(serviceMsg, "Select one service.");
      return false;
    }
    clearMsg(serviceMsg);
    return true;
  }

  function validateTerms() {
    if (!terms.checked) {
      setError(termsMsg, "Accept policies.");
      return false;
    }
    clearMsg(termsMsg);
    return true;
  }

  // ======================
  // Event Handling
  // ======================
  function attachFocusBlur(el, msgEl, validateFn) {
    el.addEventListener("focus", () => {
      el.classList.add("focusGlow");
      clearMsg(msgEl);
      setBadge("TYPING...");
    });

    el.addEventListener("blur", () => {
      el.classList.remove("focusGlow");
      validateFn();
      setBadge("READY");
    });
  }

  attachFocusBlur(username, userMsg, validateUsername);
  attachFocusBlur(password, passMsg, validatePassword);
  attachFocusBlur(mobile, mobileMsg, validateMobile);
  attachFocusBlur(email, emailMsg, validateEmail);
  attachFocusBlur(address, addressMsg, validateAddress);

  // Digits only
  mobile.addEventListener("keypress", (e) => {
    if (e.key < "0" || e.key > "9") {
      e.preventDefault();
      setError(mobileMsg, "Numbers only.");
    }
  });

  // Mouse hover
  hoverZone.addEventListener("mouseover", () => {
    hoverZone.textContent = "Mouse Inside";
  });

  hoverZone.addEventListener("mouseout", () => {
    hoverZone.textContent = "Hover here (Mouse Over In / Out)";
  });

  registerBtn.addEventListener("click", () => {
    setBadge("CHECKING...");
  });

  resetBtn.addEventListener("click", () => {
    form.reset();
    finalMsg.textContent = "Form cleared.";
    setBadge("READY");
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const ok =
      validateUsername() &&
      validatePassword() &&
      validateMobile() &&
      validateEmail() &&
      validateDepartment() &&
      validateBlood() &&
      validateAddress() &&
      validateGender() &&
      validateServices() &&
      validateTerms();

    if (ok) {
      finalMsg.innerHTML = "Registration Successful ✅";
      setBadge("SUBMITTED");
    } else {
      finalMsg.innerHTML = "Fix errors first.";
      setBadge("ERROR");
    }
  });

});
