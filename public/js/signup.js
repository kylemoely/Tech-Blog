const haveAcc = document.getElementById('haveAcc');
const formEl = document.querySelector("form");

const backToLogin = async () => {
    const response = await fetch('/login');
    location.href = response.url;
}

const makeUser = async (event) => {
     event.preventDefault();
    const uname = document.getElementById("uname").value;
    const pword = document.getElementById("pword").value;
    const confpword = document.getElementById("confpword").value;
    if(uname && pword && confpword){
        if(pword!==confpword){
            alert("Passwords must match.");
        } 
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({uname, confpword}),
            headers: { 'Content-Type': 'application/json' }
        });
        if(response.ok){
            const response = await fetch('/');
            location.href = response.url;
        } else {
            alert('Failed to sign up.');
        }
        console.log(response);
    } else{
        alert("Please fill out all fields.");
    }
}

formEl.addEventListener("submit", makeUser);
haveAcc.addEventListener("click", backToLogin);