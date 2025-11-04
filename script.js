const searchButton = document.querySelector('.search-button');

const searchBar = document.getElementById('input');

const searchResult = document.getElementById('search-result');

searchButton.addEventListener('click', () => {
  const query = searchBar.value.trim();
  if(query === ""){
    alert("Please type something into the search bar");
  }else{
     searchResult.textContent = `You searched for: "${query}"`;
  }
});

orderButton.addEventListener('click', () => {
  
})
