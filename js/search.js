document.getElementById('searchIcon').onclick = function() {
    document.getElementById('search').style.display = 'block';
    document.getElementById('clear').style.display = 'block';
    document.getElementById('search').focus();
    document.getElementById('searchIcon').style.display = 'none';
  }
  document.getElementById('clear').onclick = function() {
    document.getElementById('searchIcon').style.display = 'block';
    document.getElementById('search').style.display = 'none';
    document.getElementById('clear').style.display = 'none';
  }

// const input = document.getElementById("searchInput");
// const searchBtn = document.getElementById("searchBtn");

// const expand = () => {
//     searchBtn.classList.toggle("close");
//     input.classList.toggle("square");
// };

// searchBtn.addEventListener("click", expand); 