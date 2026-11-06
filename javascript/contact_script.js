document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("reservationForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("Name").value;
    const dateTime = document.getElementById("Date").value;
    const guests = document.getElementById("Guests").value;

    const message = `Thank you, ${name}! Your reservation for ${guests} guest(s) on ${dateTime} has been confirmed. We look forward to welcoming you at Savoury Bites.`;

    const confirmationDiv = document.getElementById("confirmationMessage");
    confirmationDiv.textContent = message;
  });
});