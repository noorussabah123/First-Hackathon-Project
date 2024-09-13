

// Form data ko uthane aur resume me dikhane ka function
document.querySelector('.generate-cv-btn')?.addEventListener('click', function (e: Event) {
    e.preventDefault(); // Default submit behavior ko roknay ke liye

    // Form ko hide karna
    const formContainer = document.getElementById('form-container');
    if (formContainer) {
        formContainer.style.display = 'none'; // Form ko hide karna
    }

    // Personal Info fields ki values get karna
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const phoneNumber = (document.getElementById('phone-number') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLTextAreaElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const linkedin = (document.getElementById('linkedin') as HTMLInputElement).value;
    const github = (document.getElementById('github') as HTMLInputElement).value;

    // Professional Info fields ki values get karna
    const objective = (document.getElementById('objective') as HTMLTextAreaElement).value;
    const workExperience = (document.getElementById('work-experience') as HTMLTextAreaElement).value;
    const qualification = (document.getElementById('qualification') as HTMLTextAreaElement).value;

    // Skills ko get karna
    const skillsInput = (document.getElementById('skills') as HTMLTextAreaElement).value;

    // Skills ko line breaks ya commas par split karna
    const skillsArray = skillsInput.split(/[\n,]+/).map(skill => skill.trim()); // Split by new lines or commas

    // Image ko upload karne ka process
    const profilePic = (document.getElementById('profile-pic') as HTMLInputElement).files?.[0];

    // FileReader ka use image ko read karne ke liye
    const reader = new FileReader();

    reader.onload = function (e: ProgressEvent<FileReader>) {
        const imageSrc = e.target?.result as string; // Image ka source set karna
        
        // Resume display ke liye output HTML banana, including image
        const resumeContent = `
            <h2>${name}</h2>
            <img src="${imageSrc}" alt="Profile Picture" style="width: 150px; height: 150px;">
            <p class="number"><strong></strong> ${phoneNumber}</p>
            <p class="address"><strong></strong> ${address}</p>
            <h3>Important Links:</h3>
            <p class="email"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p class="linkedin"><strong>LinkedIn:</strong> <a href="${linkedin}" target="_blank">${linkedin}</a></p>
            <p class="github"><strong>GitHub:</strong> <a href="${github}" target="_blank">${github}</a></p>
            <h3>Objective</h3>
            <p>${objective}</p>
            <h3>Work Experience</h3>
            <p>${workExperience}</p>
            <h3>Academic Qualification</h3>
            <p>${qualification}</p>
            <h3>Skills</h3>
            <ul>
                ${skillsArray.map(skill => `<li>${skill}</li>`).join('')}
            </ul>
        `;


         // Resume ko HTML me dikhana
         const resumeOutput = document.getElementById('resume-output');
         if (resumeOutput) {
             resumeOutput.innerHTML = resumeContent;
             resumeOutput.style.display = 'block'; // Show resume section

             // Create and show button container after resume generation
         const buttonContainer = document.createElement("div");
         buttonContainer.id = "buttonsContainer";
         resumeOutput.appendChild(buttonContainer);

         const downloadButton = document.createElement("button");
         downloadButton.textContent = "Download as PDF";
         downloadButton.className = "download-button";
         downloadButton.addEventListener('click', () => {
             window.print();

            
         });
         buttonContainer.appendChild(downloadButton);

     }

    };

    // Agar image upload ki gayi hai, to usko read karna
    if (profilePic) {
        reader.readAsDataURL(profilePic);
    } else {
        alert("Please upload a profile picture.");
    }
});
