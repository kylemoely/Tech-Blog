const loginBtn = document.getElementById('loginBtn');
const homeBtn = document.getElementById('homeBtn');
const logoutBtn = document.getElementById('logoutBtn');


const goToHome = async () => {
    const response = await fetch('/');
    location.href = response.url;
}

const goToLogin = async () => {
    const response = await fetch('/login');
    location.href = response.url;
}

const logout = async () => {
    const response = await fetch('/api/users/logout', {
        method: 'post',
        headers: {'Content-Type': 'application/json'}
    });
    if(response.ok){
        document.location.replace('/');
    } else{
        alert('Failed to log out');
    }
}

logoutBtn.addEventListener("click", logout);
loginBtn.addEventListener("click", goToLogin);
homeBtn.addEventListener("click", goToHome);