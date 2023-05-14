const signUpBtn = document.getElementById('goToSignup');
const formEl = document.querySelector("form");

const login = async (event) => {
    event.preventDefault();
    const uname = document.getElementById('uname').value.trim();
    const pword = document.getElementById('pword').value;
    if(uname && pword){
        const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({uname, pword}),
        headers: { 'Content-Type': 'application/json'}
        });
        if(response.ok){
            const response = await fetch(`/${uname}`);
            location.href = response.url;
        } else{
            alert('Incorrect username or password.');
        }
    } else {
        alert('Please fill out all fields.');
    }
    
}

const goToSignup = async () => {
    const response = await fetch('/signup');
    location.href = response.url;
}

formEl.addEventListener("submit", login);
signUpBtn.addEventListener("click", goToSignup);
