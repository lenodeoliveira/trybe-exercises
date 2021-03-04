const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = (joke) => {
    const id = document.getElementById('jokeContainer');
    id.innerHTML = joke;
};

const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
};
  
  fetch(API_URL, myObject)
  .then(response => response.json())
  .then(data => {
      fetchJoke(data.joke);
});



window.onload = () => fetchJoke();
