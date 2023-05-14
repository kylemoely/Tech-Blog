const signUp = document.getElementById('signUp');

const toSignUp = async () => {
    const response = await fetch('/signup');
    location.href=response.url;
}

signUp.addEventListener("click", toSignUp);