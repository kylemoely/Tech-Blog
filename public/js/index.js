const loginBtn = document.getElementById('loginBtn');

const goToLogin = async () => {
    const response = await fetch('/login');
    location.href = response.url;
}

loginBtn.addEventListener("click", goToLogin);

console.log("Linked!");