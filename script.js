const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const searchHistoryList = document.getElementById('search-history');
const clearBtn = document.getElementById('clear-btn');
let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];

function displaySearchHistory() {

    searchHistoryList.innerHTML = '';

   
    searchHistory.forEach((searchTerm, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = searchTerm;
        searchHistoryList.appendChild(listItem);
    });
}


function handleSearch() {
    const searchTerm = searchInput.value.trim();

    if (searchTerm !== '') {
      
        searchHistory.push(searchTerm);

       
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory));

       
        searchInput.value = '';

      
        displaySearchHistory();
    }
}


function clearSearchHistory() {
 
    searchHistory = [];
    localStorage.removeItem('searchHistory');

   
    displaySearchHistory();
}


searchBtn.addEventListener('click', handleSearch);
clearBtn.addEventListener('click', clearSearchHistory);


displaySearchHistory();