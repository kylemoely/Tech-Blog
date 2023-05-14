const signUpBtn = document.getElementById('goToSignup');
const homeBtn = document.getElementById('homeBtn');

const goToHome = async () => {
    const response = await fetch('/');
    location.href = response.url;
}

const goToSignup = async () => {
    const response = await fetch('/signup');
    location.href = response.url;
}
signUpBtn.addEventListener("click", goToSignup);
homeBtn.addEventListener("click", goToHome);
console.log("Linked!");