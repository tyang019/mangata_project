//1. Select DOM element to work with
const searchBar = document.getElementById('input');
const searchButton = document.querySelector('.search-button');
const searchResult = document.getElementById('search-result');
const overlay = document.getElementById('overlay');
const confirmBtn = document.getElementById('confirmBtn');



//2. Add Event Listener 
confirmBtn.addEventListener('click', function(){
 overlay.style.display = 'none';
})

searchButton.addEventListener('click', () => {
  const query = searchBar.value.trim();
  if(query === ""){
   overlay.style.display = 'flex';
  }else{
     searchResult.textContent = `You searched for: "${query}"`;
  }
});


//3. Functions


//4. Input Validation


//5 Business Logic


//6. DOM Manipulation 


//7. Optional Utility Functions
