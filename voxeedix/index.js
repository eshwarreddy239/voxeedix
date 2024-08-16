document.addEventListener("DOMContentLoaded", function() 
{
 const adContainer = document.getElementById("ad-container");
 const closeButton = document.getElementById("close-btn");

// Show the ad when the page loads
adContainer.style.display = "flex";

// Close the ad when the close button is clicked
    closeButton.addEventListener("click", function() 
    {
        adContainer.style.display = "none";
    });
});


// Select the form element
const form = document.getElementById("myForm");

// Event listener for form submission
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const formData = {
        name: form.elements["name"].value,
        mail: form.elements["mail"].value,
        phoneno: form.elements["phoneno"].value,
        message: form.elements["message"].value
    };

    // Save form data to localStorage
    localStorage.setItem('formData', JSON.stringify(formData));

    // Optionally, you can clear the form fields after saving
    form.reset();

    alert('Form data saved successfully!');
});

// Check if there is saved form data on page load
document.addEventListener("DOMContentLoaded", function() {
    const savedFormData = localStorage.getItem('formData');
    if (savedFormData) {
        const formDataObj = JSON.parse(savedFormData);

        // Populate form fields with saved data
        form.elements["name"].value = formDataObj.name || '';
        form.elements["mail"].value = formDataObj.mail || '';
        form.elements["phoneno"].value = formDataObj.phoneno || '';
        form.elements["message"].value = formDataObj.message || '';
    }
});