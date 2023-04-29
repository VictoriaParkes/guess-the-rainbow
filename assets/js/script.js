// Wait for DOM to finish loading before displaying the instructions modal
// Modal code taken from https://www.w3schools.com/howto/howto_css_modals.asp

document.addEventListener("DOMContentLoaded", function () {
    // Get the modal
    let modal = document.getElementById("instructions-modal");
    // Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[0];
    // Display the modal
    modal.style.display = "block";
    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});