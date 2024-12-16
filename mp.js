function generateResume(event) {
    event.preventDefault(); // Prevent form submission from refreshing the page

    // Get the values from the form fields
    var name = document.getElementById('name').value;
    var dob = document.getElementById('dob').value;
    var gender = document.getElementById('gender').value;
    var address = document.getElementById('address').value;
    var nationality = document.getElementById('nationality').value;
    var maritalStatus = document.getElementById('maritalStatus').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var educationQualification = document.getElementById('educationQualification').value;
    var professionalEducation = document.getElementById('professionalEducation').value;
    var skills = document.getElementById('skills').value;
    var strengths = document.getElementById('strengths').value;
    var fatherName = document.getElementById('fatherName').value;
    var languages = document.getElementById('languages').value;
    var declaration = document.getElementById('declaration').value;
    var place = document.getElementById('place').value;
    var date = document.getElementById('date').value;

    // Profile picture (if any)
    var profilePic = document.getElementById('image').files[0];

    // Check if any required fields are empty
    if (!name || !dob || !gender || !address || !nationality || !maritalStatus || !phone || !email ||
        !educationQualification || !professionalEducation || !skills || !strengths || !fatherName ||
        !languages || !declaration || !place || !date) {
        
        // Show a single alert for missing details
        alert("Please fill in all the necessary details shown in the form.");
        return; // Exit the function if any field is missing
    }

    // Proceed with the resume generation if no errors
    var profilePicURL = '';
    if (profilePic) {
        var reader = new FileReader();
        reader.onloadend = function () {
            profilePicURL = reader.result; // This will be the base64 string
            storeResumeData(); // Now call the function to store all resume data
            window.location.href = "resume.html"; // New page to display the resume
        };
        reader.readAsDataURL(profilePic); // Start reading the image file
    } else {
        storeResumeData(); // If no image, proceed to store the resume data without the image
        window.location.href = "resume.html"; // New page to display the resume
    }

    function storeResumeData() {
        // Create the resume content dynamically
        var resumeContent = `
            <h2>${name}'s Resume</h2>
            ${profilePicURL ? `<img src="${profilePicURL}" alt="Profile Picture" style="width:150px;height:150px;">` : ''}
            <p><strong>Date of Birth:</strong> ${dob}</p>
            <p><strong>Gender:</strong> ${gender}</p>
            <p><strong>Nationality:</strong> ${nationality}</p>
            <p><strong>Marital Status:</strong> ${maritalStatus}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><h3>Address:</h3> ${address}</p>
            <p><h3>Education:</h3> ${educationQualification}</p>
            <p><h3>Professional Education:</h3> ${professionalEducation}</p>
            <p><h3>Skills:</h3> ${skills}</p>
            <p><h3>Strengths:</h3> ${strengths}</p>
            <p><h3>Father's Name:</h3> ${fatherName}</p>
            <p><h3>Languages Known:</h3> ${languages}</p>
            <p><h3>Declaration:</h3> ${declaration}</p>
            <p><strong>Place:</strong> ${place}</p>
            <p><strong>Date:</strong> ${date}</p>
        `;

        // Store the resume content and image URL in localStorage
        localStorage.setItem('resumeContent', resumeContent);
        localStorage.setItem('profilePicURL', profilePicURL);
    }
}
