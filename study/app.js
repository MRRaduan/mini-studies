const post = [
  {title: 'Post One', body: 'This is post one'},
  {title: 'Post Two', body: 'This is post two'},
];

function createPost(post) {
  setTimeout(function() {
    post.push(post);
  }, 2000);
}

function getPosts() {
  setTimeout(function() {
    let output = '';
    post.forEach(function(post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}


createPost();
getPosts();