window.onload = function() {
    // Get resume content and profile picture URL from localStorage
    var resumeContent = localStorage.getItem('resumeContent');
    
    // Display the resume content in the "resume" div
    var resumeContainer = document.getElementById('resume');
    resumeContainer.innerHTML = resumeContent;

     // Add this line to fetch profilePicURL from localStorage
    if (profilePicURL) {
        var imgTag = document.createElement('img');
        imgTag.src = profilePicURL;
        imgTag.alt = "Profile Picture";
        imgTag.style.width = "150px";
        imgTag.style.height = "150px";
        imgTag.style.borderRadius = "10px";
        resumeContainer.prepend(imgTag);
    }
}
