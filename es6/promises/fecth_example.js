// notice this must be run on client side, fetch is FE specific API
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(json => console.log(json));
