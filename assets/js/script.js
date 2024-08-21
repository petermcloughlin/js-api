const API_KEY = '3LIJJb1cSUXKDAg-gWin0cF76AM';
const API_URL = 'https://ci-jshint.herokuapp.com/api';
const resultsModal = new bootstrap.Modal(document.getElementById("resultsModal"));

document.getElementById('status').addEventListener('click', e =>getStatus(e));
//1.Make GET request to the API URL with the API key
//2.Pass the data to the display function
async function getStatus(e){
    const queryString = `${API_URL}?api_key=${API_KEY}`;

    const response = await fetch(queryString);

    const data = await response.json();

    if(response.ok){
        console.log(data.expiry);
    }
    


}