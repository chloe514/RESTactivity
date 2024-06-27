// Event listener for the "Get All Posts" button
document.getElementById('getAllPosts').addEventListener('click', () => {
    
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json()) 
        .then(data => {
            displayResults(data); 
        });
});

// Event listener for the "Get Post with ID 10" button
document.getElementById('getPost10').addEventListener('click', () => {
    
    fetch('https://jsonplaceholder.typicode.com/posts/10')
        .then(response => response.json()) 
        .then(data => {
            displayResults(data); 
        });
});

// Event listener for the "Create New Post" button
document.getElementById('createPost').addEventListener('click', () => {
    
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: 'Hello',
            body: 'You',
            userId: 1
        })
    })
    .then(response => response.json()) 
    .then(data => {
        displayResults(data); 
    })
    .catch(error => console.error('Error:', error)); 
});


// Event listener for the "Replace Post with ID 12" button
document.getElementById('replacePost12').addEventListener('click', () => {
    
    fetch('https://jsonplaceholder.typicode.com/posts/12', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: 12,
            title: 'Hello',
            body: 'You',
            userId: 1
        })
    })
    .then(response => response.json()) 
    .then(data => {
        displayResults(data); 
    });
});

// Event listener for the "Update Title of Post with ID 12" button
document.getElementById('updateTitlePost12').addEventListener('click', () => {
    
    fetch('https://jsonplaceholder.typicode.com/posts/12', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            Hello: 'Hello'
        })
    })
    .then(response => response.json()) 
    .then(data => {
        displayResults(data); 
    });
});

// Event listener for the "Delete Post with ID 12" button
document.getElementById('deletePost12').addEventListener('click', () => {
    
    fetch('https://jsonplaceholder.typicode.com/posts/12', {
        method: 'DELETE'
    })
    .then(() => {
        displayResults({ message: 'Post deleted successfully' }); 
    });
});

// Function to display results on the page
function displayResults(data) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; 
    const pre = document.createElement('pre');
    pre.textContent = JSON.stringify(data, null, 2); 
    resultsDiv.appendChild(pre);}
