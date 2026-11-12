// document.addEventListener("DOMContentLoaded", function () {
//   const form = document.getElementById("reservationForm");

//   form.addEventListener("submit", function (e) {
//     e.preventDefault();

//     const name = document.getElementById("Name").value;
//     const dateTime = document.getElementById("Date").value;
//     const guests = document.getElementById("Guests").value;

//     const message = `Thank you, ${name}! Your reservation for ${guests} guest(s) on ${dateTime} has been confirmed. We look forward to welcoming you at Savoury Bites.`;

//     const confirmationDiv = document.getElementById("confirmationMessage");
//     confirmationDiv.textContent = message;
//   });
// });

// Popup Section Here
document.addEventListener("DOMContentLoaded", function() {
    
    const form = document.getElementById("reservationForm");
    const popupOverlay = document.getElementById("popupOverlay");
    const popupX = document.getElementById("popupX");
    const popupClose = document.getElementById("popupClose");
    const confirmation = document.getElementById("confirmationMessage");
    const guests = document.getElementById("Guests").value

    
    
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("Name").value;
    const dateTime = document.getElementById("Date").value;
    const guests = document.getElementById("Guests").value;
    const message = `Thank you, ${name}! Your reservation for ${guests} guest(s) on ${dateTime} has been confirmed. We look forward to welcoming you at Savoury Bites.`; 
    confirmation.textContent = message;
    
    // To prevent any number in the negatives
    if (guests < 1 || !Number.isInteger(Number(guests))) {
      alert("PLease enter a valid number of guests.");
      return;
    }

    showPopup();
    form.reset();
  });

    function showPopup() {
      popupOverlay.classList.add("active");
    }

    // Close popup

    function closePopup() {
      popupOverlay.classList.remove("active");
    }

    // Close using X button 

    popupX.addEventListener("click", closePopup);

    // Close using the close button

    popupClose.addEventListener("click", closePopup);
})
