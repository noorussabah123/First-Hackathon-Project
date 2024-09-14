var _a;
(_a = document.querySelector('.generate-cv-btn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function (e) {
    var _a;
    e.preventDefault();
    var formContainer = document.getElementById('form-container');
    if (formContainer) {
        formContainer.style.display = 'none';
    }
    var name = document.getElementById('name').value;
    var phoneNumber = document.getElementById('phone-number').value;
    var address = document.getElementById('address').value;
    var email = document.getElementById('email').value;
    var linkedin = document.getElementById('linkedin').value;
    var github = document.getElementById('github').value;
    var objective = document.getElementById('objective').value;
    var workExperience = document.getElementById('work-experience').value;
    var qualification = document.getElementById('qualification').value;
    var skillsInput = document.getElementById('skills').value;
    var skillsArray = skillsInput.split(/[\n,]+/).map(function (skill) { return skill.trim(); });
    var profilePic = (_a = document.getElementById('profile-pic').files) === null || _a === void 0 ? void 0 : _a[0];
    var reader = new FileReader();
    reader.onload = function (e) {
        var _a;
        var imageSrc = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
        var resumeContent = "\n            <h2>".concat(name, "</h2>\n            <img src=\"").concat(imageSrc, "\" alt=\"Profile Picture\" style=\"width: 150px; height: 150px;\">\n            <p class=\"number\"><strong></strong> ").concat(phoneNumber, "</p>\n            <p class=\"address\"><strong></strong> ").concat(address, "</p>\n            <h3 class=\"links\">Important Links:</h3>\n            <p class=\"email\"><strong>Email:</strong> <a href=\"mailto:").concat(email, "\">").concat(email, "</a></p>\n            <p class=\"linkedin\"><strong>LinkedIn:</strong> <a href=\"").concat(linkedin, "\" target=\"_blank\">").concat(linkedin, "</a></p>\n            <p class=\"github\"><strong>GitHub:</strong> <a href=\"").concat(github, "\" target=\"_blank\">").concat(github, "</a></p>\n            <h3 class=\"objective\">Objective</h3>\n            <p>").concat(objective, "</p>\n            <h3 class=\"experience\">Work Experience</h3>\n            <p>").concat(workExperience, "</p>\n            <h3 class=\"qualification\">Academic Qualification</h3>\n            <p>").concat(qualification, "</p>\n            <h3 class=\"skill\">Skills</h3>\n            <ul>\n                ").concat(skillsArray.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(''), "\n            </ul>\n        ");
        var resumeOutput = document.getElementById('resume-output');
        var downloadButton = document.getElementById('download-button');
        if (resumeOutput) {
            resumeOutput.innerHTML = resumeContent;
            resumeOutput.style.display = 'block'; // Show resume section
            if (downloadButton) {
                downloadButton.style.display = 'block';
                downloadButton.addEventListener('click', function () {
                    window.print();
                });
            }
        }
    };
    if (profilePic) {
        reader.readAsDataURL(profilePic);
    }
    else {
        alert("Please upload a profile picture.");
    }
});
