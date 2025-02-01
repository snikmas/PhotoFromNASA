import { API_KEY } from './data.js';

const URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`

const resultsDiv = document.querySelector('.results');
const input = document.querySelector('#inputId');
const searchBtn = document.querySelector('#searchBtn');
let date = new Date();

searchBtn.addEventListener('click', getFetch);


// function for loading today's photo, when user opens the link
function getTodaysDate(){
  let day = String(date.getDate()).padStart(2, '0');
  let month = String((date.getMonth() + 1)).padStart(2, '0');
  let year = date.getFullYear();

  return `${year}-${month}-${day}`;
}



function getFetch() {
  
  document.querySelector('h1').innerText = '';
  document.querySelector('.display').style.justifyContent = 'flex-end';

  date = input.value;
  console.log(date)
  
  fetching()
}

function fetching(){
  
  fetch(URL + `&date=${date}`)
  .then(res => res.json())
  .then(data => {
    
    console.log(data);
    document.body.style.backgroundImage = `url('${data.hdurl}')`;
    
    
    
  })
  .catch(err => {
    console.log(`error ${err}`)
  })
  
}

// user opens the site 
date = getTodaysDate()
fetching()