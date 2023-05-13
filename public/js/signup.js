const haveAcc = document.getElementById('haveAcc');

const backToLogin = async () => {
    const response = await fetch('/login');
    location.href = response.url;
}

haveAcc.addEventListener("click", backToLogin);