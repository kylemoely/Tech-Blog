const signUpBtn = document.getElementById('goToSignup');

const goToSignup = async () => {
    const response = await fetch('/signup');
    location.href = response.url;
}
signUpBtn.addEventListener("click", goToSignup);

console.log("Linked!");