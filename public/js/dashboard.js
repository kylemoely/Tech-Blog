const formEl = document.querySelector('form');
const makePost = async (event) => {
    event.preventDefault();
    const newTitle = document.getElementById('title').value.trim();
    const newContent = document.getElementById('content').value;
    const response = await fetch('/api/users/newpost', {
        method: 'post',
        body: JSON.stringify({newTitle, newContent}),
        headers: {'Content-Type': 'application/json'}
    });
    if(response.ok){
        location.href=location.href;
    } else{
        alert('Failed to create post');
    }
}

formEl.addEventListener('submit', makePost);