
document.querySelector('.generate-cv-btn')?.addEventListener('click', function (e: Event) {
    e.preventDefault(); 

  
    const formContainer = document.getElementById('form-container');
    if (formContainer) {
        formContainer.style.display = 'none'; 
    }

   
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const phoneNumber = (document.getElementById('phone-number') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLTextAreaElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const linkedin = (document.getElementById('linkedin') as HTMLInputElement).value;
    const github = (document.getElementById('github') as HTMLInputElement).value;

   
    const objective = (document.getElementById('objective') as HTMLTextAreaElement).value;
    const workExperience = (document.getElementById('work-experience') as HTMLTextAreaElement).value;
    const qualification = (document.getElementById('qualification') as HTMLTextAreaElement).value;

   
    const skillsInput = (document.getElementById('skills') as HTMLTextAreaElement).value;

  
    const skillsArray = skillsInput.split(/[\n,]+/).map(skill => skill.trim()); 

  
    const profilePic = (document.getElementById('profile-pic') as HTMLInputElement).files?.[0];

   
    const reader = new FileReader();

    reader.onload = function (e: ProgressEvent<FileReader>) {
        const imageSrc = e.target?.result as string; 
        
      
        const resumeContent = `
            <h2>${name}</h2>
            <img src="${imageSrc}" alt="Profile Picture" style="width: 150px; height: 150px;">
            <p class="number"><strong></strong> ${phoneNumber}</p>
            <p class="address"><strong></strong> ${address}</p>
            <h3 class="links">Important Links:</h3>
            <p class="email"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p class="linkedin"><strong>LinkedIn:</strong> <a href="${linkedin}" target="_blank">${linkedin}</a></p>
            <p class="github"><strong>GitHub:</strong> <a href="${github}" target="_blank">${github}</a></p>
            <h3 class="objective">Objective</h3>
            <p>${objective}</p>
            <h3 class="experience">Work Experience</h3>
            <p>${workExperience}</p>
            <h3 class="qualification">Academic Qualification</h3>
            <p>${qualification}</p>
            <h3 class="skill">Skills</h3>
            <ul>
                ${skillsArray.map(skill => `<li>${skill}</li>`).join('')}
            </ul>
        `;


        
       
         const resumeOutput = document.getElementById('resume-output');
         const downloadButton = document.getElementById('download-button');


         if (resumeOutput) {
             resumeOutput.innerHTML = resumeContent;
             resumeOutput.style.display = 'block'; // Show resume section

        
        if (downloadButton) {
            downloadButton.style.display = 'block';
            downloadButton.addEventListener('click', () => {
                window.print();

            });
        }

     }
     
    };
    

    
    if (profilePic) {
        reader.readAsDataURL(profilePic);
    } else {
        alert("Please upload a profile picture.");
    }
});
