document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search_input');
  const searchWrapper = document.getElementById('search_wrapper');

  searchInput.addEventListener('focus', () => searchWrapper.classList.add('header__search-wrapper--focus'));
  searchInput.addEventListener('blur', () => searchWrapper.classList.remove('header__search-wrapper--focus'));
});