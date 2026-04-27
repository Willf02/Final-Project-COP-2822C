document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();
        let successMsg = document.getElementById("successMsg");
        let errorMsg = document.getElementById("errorMsg");

        if (name === "" || email === "" || message === "") {
            errorMsg.classList.remove("d-none");
            successMsg.classList.add("d-none");
            return;
        }

        if (!email.includes("@")) {
            errorMsg.classList.remove("d-none");
            successMsg.classList.add("d-none");
            return;
        }
        
        successMsg.classList.remove("d-none");
        errorMsg.classList.add("d-none");
        document.getElementById("contactForm").reset();
    });
});