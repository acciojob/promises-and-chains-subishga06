document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const age = document.getElementById("age").value.trim();
  const name = document.getElementById("name").value.trim();

  // Validation for empty fields
  if (age === "" || name === "") {
    alert("Please enter valid details.");
    return;
  }

  // Create the promise
  const checkAgePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (parseInt(age) > 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000); // 4-second delay
  });

  // Handling promise resolution/rejection
  checkAgePromise
    .then((message) => alert(message))
    .catch((error) => alert(error));
});
