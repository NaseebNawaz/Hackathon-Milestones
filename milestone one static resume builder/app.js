// resume generation
function generateResume() {
    // information
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const education = document.getElementById("education").value;
    const skills = document.getElementById("skills").value.split(","); // Convert to array
    const experience = document.getElementById("experience").value;

    // details
    document.getElementById("resume-name").textContent = name;
    document.getElementById("resume-email").textContent = email;
    document.getElementById("resume-phone").textContent = phone;
    document.getElementById("resume-education").textContent = education;
    document.getElementById("resume-experience").textContent = experience;

    // skills
    const skillsList = document.getElementById("resume-skills");
    skillsList.innerHTML = ""; // Clear previous list
    skills.forEach(skill => {
        const li = document.createElement("li");
        li.textContent = skill.trim();
        skillsList.appendChild(li);
    });

    // CV generate
    document.getElementById("resume-box").style.display = "block";
}
