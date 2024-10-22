//your JS code here. If required.
document.getElementById("ageForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevents the form from submitting traditionally

  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;

  if (name === "" || age === "") {
    alert("Both name and age fields must be filled out.");
    return;
  }

  // Creating a promise that checks the user's age
  let agePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry, ${name}. You aren't old enough.`);
      }
    }, 4000); // 4-second delay
  });

  // Handling the promise outcome
  agePromise
    .then((message) => {
      alert(message); // If resolved, show success message
    })
    .catch((error) => {
      alert(error); // If rejected, show error message
    });
});
