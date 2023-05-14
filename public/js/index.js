const loginBtn = document.getElementById('loginBtn');
const homeBtn = document.getElementById('homeBtn');



const goToHome = async () => {
    const response = await fetch('/');
    location.href = response.url;
}

const goToLogin = async () => {
    const response = await fetch('/login');
    location.href = response.url;
}


loginBtn.addEventListener("click", goToLogin);
homeBtn.addEventListener("click", goToHome);
console.log("Linked!");