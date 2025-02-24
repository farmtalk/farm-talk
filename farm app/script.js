// Your existing signup logic
document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent default form submission

    console.log("Form submitted!");  // Debugging line

    // Get form values
    const username = document.getElementById("username").value;
    const email = document.getElementById("email-phone").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const role = document.getElementById("role").value;

    console.log("Role selected: " + role);  // Debugging line

    // Validation: Check if either email or phone is filled
    if (!email && !phone) {
        alert("Please enter either email or phone number.");
        return;
    }

    // Password match validation
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Validation: Check if all fields are filled
    if (!username || !password || !role) {
        alert("Please fill in all mandatory fields.");
        return;
    }

    // Ensure the role is selected
    if (role === "") {
        alert("Please select a role.");
        return;
    }

    // Log before redirecting
    console.log("Redirecting based on role: " + role);  // Debugging line

    // Redirect user based on role
    switch (role) {
        case 'consumer':
            window.location.href = 'consumer-signup.html';  // Redirect to consumer signup page
            break;
        case 'farmer':
            window.location.href = 'farmer-signup.html';  // Redirect to farmer signup page
            break;
        case 'sustainability-company':
            window.location.href = 'company-signup.html';  // Redirect to sustainability signup page
            break;
        default:
            alert("Please select a valid role.");
    }
});

window.onload = function () {
    const storedName = localStorage.getItem("company-name");
    const storedUsername = localStorage.getItem("company-username");
    const storedBio = localStorage.getItem("bio");

    if (storedName) {
        document.getElementById("display-name").textContent = storedName;
        document.getElementById("company-name").value = storedName;
    }
    if (storedUsername) {
        document.getElementById("display-username").textContent = storedUsername;
        document.getElementById("company-username").value = storedUsername;
    }
    if (storedBio) {
        document.getElementById("display-bio").textContent = storedBio;
        document.getElementById("bio").value = storedBio;
    }
};

// Service Worker for offline capabilities
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
    .then(function(registration) {
        console.log('Service Worker registered with scope:', registration.scope);
    })
    .catch(function(error) {
        console.log('Service Worker registration failed:', error);
    });
}
