var _a;
// Form data ko uthane aur resume me dikhane ka function
(_a = document.querySelector('.generate-cv-btn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function (e) {
    var _a;
    e.preventDefault(); // Default submit behavior ko roknay ke liye
    // Form ko hide karna
    var formContainer = document.getElementById('form-container');
    if (formContainer) {
        formContainer.style.display = 'none'; // Form ko hide karna
    }
    // Personal Info fields ki values get karna
    var name = document.getElementById('name').value;
    var phoneNumber = document.getElementById('phone-number').value;
    var address = document.getElementById('address').value;
    var email = document.getElementById('email').value;
    var linkedin = document.getElementById('linkedin').value;
    var github = document.getElementById('github').value;
    // Professional Info fields ki values get karna
    var objective = document.getElementById('objective').value;
    var workExperience = document.getElementById('work-experience').value;
    var qualification = document.getElementById('qualification').value;
    // Skills ko get karna
    var skillsInput = document.getElementById('skills').value;
    // Skills ko line breaks ya commas par split karna
    var skillsArray = skillsInput.split(/[\n,]+/).map(function (skill) { return skill.trim(); }); // Split by new lines or commas
    // Image ko upload karne ka process
    var profilePic = (_a = document.getElementById('profile-pic').files) === null || _a === void 0 ? void 0 : _a[0];
    // FileReader ka use image ko read karne ke liye
    var reader = new FileReader();
    reader.onload = function (e) {
        var _a;
        var imageSrc = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result; // Image ka source set karna
        // Resume display ke liye output HTML banana, including image
        var resumeContent = "\n            <h2>".concat(name, "</h2>\n            <img src=\"").concat(imageSrc, "\" alt=\"Profile Picture\" style=\"width: 150px; height: 150px;\">\n            <p class=\"number\"><strong></strong> ").concat(phoneNumber, "</p>\n            <p class=\"address\"><strong></strong> ").concat(address, "</p>\n            <h3>Important Links:</h3>\n            <p class=\"email\"><strong>Email:</strong> <a href=\"mailto:").concat(email, "\">").concat(email, "</a></p>\n            <p class=\"linkedin\"><strong>LinkedIn:</strong> <a href=\"").concat(linkedin, "\" target=\"_blank\">").concat(linkedin, "</a></p>\n            <p class=\"github\"><strong>GitHub:</strong> <a href=\"").concat(github, "\" target=\"_blank\">").concat(github, "</a></p>\n            <h3>Objective</h3>\n            <p>").concat(objective, "</p>\n            <h3>Work Experience</h3>\n            <p>").concat(workExperience, "</p>\n            <h3>Academic Qualification</h3>\n            <p>").concat(qualification, "</p>\n            <h3>Skills</h3>\n            <ul>\n                ").concat(skillsArray.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(''), "\n            </ul>\n        ");
        // Resume ko HTML me dikhana
        var resumeOutput = document.getElementById('resume-output');
        if (resumeOutput) {
            resumeOutput.innerHTML = resumeContent;
            resumeOutput.style.display = 'block'; // Show resume section
            // Create and show button container after resume generation
            var buttonContainer = document.createElement("div");
            buttonContainer.id = "buttonsContainer";
            resumeOutput.appendChild(buttonContainer);
            var downloadButton = document.createElement("button");
            downloadButton.textContent = "Download as PDF";
            downloadButton.className = "download-button";
            downloadButton.addEventListener('click', function () {
                window.print();
            });
            buttonContainer.appendChild(downloadButton);
        }
    };
    // Agar image upload ki gayi hai, to usko read karna
    if (profilePic) {
        reader.readAsDataURL(profilePic);
    }
    else {
        alert("Please upload a profile picture.");
    }
});
