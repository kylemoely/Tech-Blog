const loginBtn = document.getElementById('loginBtn');
const homeBtn = document.getElementById('homeBtn');
const logoutBtn = document.getElementById('logoutBtn');
const dashBtn = document.getElementById('dashboardBtn');


const goToHome = async () => {
    location.href = '/';
}

const goToLogin = async () => {
    location.href = '/login';
}

const goToDash = async () => {
    location.href = '/dashboard';
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

dashBtn.addEventListener("click", goToDash);
logoutBtn.addEventListener("click", logout);
loginBtn.addEventListener("click", goToLogin);
homeBtn.addEventListener("click", goToHome);