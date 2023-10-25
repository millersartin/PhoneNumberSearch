// function doPopAll(First3, Mid3, Last4) {
//   // This loop runs from 1 to 100
//   for (let j = 1; j <= 100; j++) {
//     // Create a variable to hold the formatted string value of j
//     let formattedJ;

//     // If j is less than 10, add a leading zero
//     if (j < 10) {
//       formattedJ = "0" + j.toString();
//     }
//     // Otherwise, convert j to a string
//     else {
//       formattedJ = j.toString();
//     }

//     // Get the form elements with ids "SearchXXa", "SearchXXb", and "SearchXXc"
//     // where XX is the current value of formattedJ
//     let first3ToPop = document.getElementById("Search" + formattedJ + "a");
//     let mid3ToPop = document.getElementById("Search" + formattedJ + "b");
//     let last4ToPop = document.getElementById("Search" + formattedJ + "c");

//     // If the form elements exist, set their values to First3, Mid3, and Last4 respectively
//     if (first3ToPop != null && mid3ToPop != null && last4ToPop != null) {
//       first3ToPop.value = First3;
//       mid3ToPop.value = Mid3;
//       last4ToPop.value = Last4;
//     }
//   }
// }

function doPopAll(First3, Mid3, Last4) {
  let phoneInputs = document.getElementsByClassName("phone-input");

  for (let i = 0; i < phoneInputs.length; i += 3) {
    let section = phoneInputs[i].getAttribute("data-section");

    if (phoneInputs[i]) {
      phoneInputs[i].value = First3;
    }
    if (phoneInputs[i + 1]) {
      phoneInputs[i + 1].value = Mid3;
    }
    if (phoneInputs[i + 2]) {
      phoneInputs[i + 2].value = Last4;
    }
  }
}





// This function displays hidden sections with class "advBackgroundSection" and scrolls the first one into view
function showAdvBackground() {
  // Get all elements with class "advBackgroundSection"
  const advBackgroundSections = document.getElementsByClassName("scale-up");

  // Loop through each element and set the display property to "block"
  for (const section of advBackgroundSections) {
    section.style.display = "block";

    // Use setTimeout to wait 50 milliseconds before adding the "visible" class to the section
    setTimeout(function () {
      section.classList.add("visible");
    }, 50);
  }

  // Scroll the first section into view with a smooth animation
  if (advBackgroundSections.length > 0) {
    advBackgroundSections[0].scrollIntoView({ behavior: 'smooth' });
  }
}

