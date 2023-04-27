// Script for the password page

const newPassErrorMessage = document.getElementById('newPass-error-message');
const newPssword = document.querySelectorAll('.newPassword');
const confirmNewPassInput = document.getElementById('confirmNewPass');
const confirmNewPassErrorMessage = document.getElementById('confirmNewPass-error-message');
const newPassInput = document.getElementById('newPass');

const openModal = document.getElementById('openModal');

if(openModal) {
    // Open a modal window when the button is clicked 
    openModal.addEventListener("click", function() {
        document.getElementById('modalPassword').classList.add('active');
    });

    // Close the modal window by clicking on the cross (close button)
    document.getElementById('closeModalPassword').addEventListener("click", function() {
        document.getElementById('modalPassword').classList.remove('active');
    });
}

// START Validating fields
function resetPass(e){
    e.addEventListener('change', function(){
        if (e.value.length < 8) {
            newPassErrorMessage.classList.remove('d-none');
            newPssword.forEach(input => {
                input.style.border = "1px solid #ea4335";
            });
            
        };
    })

    e.addEventListener('input', function(){
        if (e.value.length >= 8) {
            newPssword.forEach(input => {
                input.style.border = "1px solid #e0c463";
            });
            newPassErrorMessage.classList.add('d-none'); 
        } 
    })
}

function repeatPass(e) {
    if (e.value.length >= 8) {
        e.style.border = "1px solid #e0c463";
    } else {
        e.style.border = "1px solid #c7c7c7";
    }
}

// END Validating fields


// This is a field mask. So that instead of the standard asterisks, there are custom icons on all devices
function Mask() {
    let inputMask = document.querySelectorAll(".password-wrap");
    
    inputMask.forEach(search => {
        let password = search.previousElementSibling;
    
        password.addEventListener("input", function() {
            search.value = password.value;
            let sign = search.dataset.sign;

            search.value = search.value.replace(/[\s\S]/g, sign);
        });

        search.addEventListener("input", function() {
            let password = search.previousElementSibling;
            let passwordString = "";
            let del;
            let sign = search.dataset.sign;
        
            if(password.value.length < search.value.length){
                password.value = password.value + search.value[search.value.length - 1];
                passwordString = password.value;
            } else{
                del = password.value.length - search.value.length;
                passwordString = password.value;
                passwordString = passwordString.substring(0, String(passwordString).length - (del));
                password.value = passwordString;
            }

            search.value = search.value.replace(/[\s\S]/g, sign);
        });
    });
    
}Mask();


// When submitting the form, check that all the fields are correct
function comparisonPassword() {
    event.preventDefault();
    if(newPassInput.value === confirmNewPassInput.value && newPassInput.value.length >= 8){
        confirmNewPassInput.nextElementSibling.style.border = "1px solid #e0c463";
        confirmNewPassErrorMessage.classList.add('d-none');

        // Here you should write what should happen after you successfully complete the form.

    } else{
        confirmNewPassInput.nextElementSibling.focus();
        confirmNewPassErrorMessage.classList.remove('d-none');
        confirmNewPassInput.nextElementSibling.style.border = "1px solid #ea4335";
    }
    if(confirmNewPassInput.value === ""){
        confirmNewPassInput.nextElementSibling.focus();
    }
    if(newPassInput.value === ""){
        newPassInput.focus();
    }
    if(confirmNewPassInput.value.length < 8 && confirmNewPassInput.value !== ""){
        confirmNewPassErrorMessage.classList.remove('d-none');
        confirmNewPassInput.nextElementSibling.style.border = "1px solid #ea4335";
    }
    confirmNewPassInput.addEventListener('keyup', function(){
        if(confirmNewPassInput.value === newPassInput.value){
            confirmNewPassErrorMessage.classList.add('d-none');
            confirmNewPassInput.nextElementSibling.style.border = "1px solid #dddddd";
        }
    })
};


@@include('components/scriptHeader.js');
@@include('components/swiper-min.js');
@@include('components/slider-init.js');