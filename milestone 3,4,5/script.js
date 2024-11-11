"use strict";

// Generate resume and display
function generateResume() {
    document.getElementById("resumePage").classList.remove("hidden");
    document.getElementById("resumeForm").classList.add("hidden");

    document.getElementById("resumeName").textContent = document.getElementById("name").value;
    document.getElementById("resumeEmail").textContent = `Email: ${document.getElementById("email").value}`;
    document.getElementById("resumePhone").textContent = `Phone: ${document.getElementById("phone").value}`;

    const education = `${document.getElementById("degree").value} from ${document.getElementById("school").value}`;
    document.getElementById("resumeEducation").textContent = education;

    document.getElementById("resumeWorkExperience").textContent = document.getElementById("workExperience").value;
    document.getElementById("resumeSkills").textContent = document.getElementById("skills").value;

    const photo = document.getElementById("photo").files[0];
    if (photo) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById("resumePhoto").src = e.target.result;
        };
        reader.readAsDataURL(photo);
    }
}

// Edit resume and return to form
function editResume() {
    document.getElementById("resumePage").classList.add("hidden");
    document.getElementById("resumeForm").classList.remove("hidden");
}

// Share resume link
function shareResume() {
    // Clone the resume content
    const resumeContent = document.getElementById("resumeContent").cloneNode(true);
    
    // Create a Blob from the resume HTML content
    const blob = new Blob([resumeContent.outerHTML], { type: "text/html" });
    
    // Create a temporary URL for the Blob
    const url = URL.createObjectURL(blob);
    
    // Display the shareable link in an alert
    alert(`Shareable Link: ${url}`);
}

// Download resume as PDF
function downloadPDF() {
    const resumeContent = document.getElementById("resumeContent");
    html2pdf().from(resumeContent).save("resume.pdf");
}
