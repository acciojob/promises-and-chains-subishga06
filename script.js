document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const ageInput = document.getElementById("age");
  const nameInput = document.getElementById("name");

  const age = ageInput.value ? ageInput.value.trim() : "";
  const name = nameInput.value ? nameInput.value.trim() : "";

  // Validation for empty fields
  if (age === "" || name === "") {
    alert("Please enter valid details.");
    return;
  }

  const ageNumber = parseInt(age);

  const checkAgePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (ageNumber > 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000);
  });

  checkAgePromise
    .then((msg) => alert(msg))
    .catch((err) => alert(err));
});
