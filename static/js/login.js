document.addEventListener('DOMContentLoaded', () => {
    const openButton = document.getElementById('loginButton');
    const closeButton = document.getElementById('closeButton');
    const container = document.getElementById('loginContainer');
  
    openButton.addEventListener('click', () => {
      container.classList.add('opened');
      openButton.style.display = 'none';
    });
  
    closeButton.addEventListener('click', () => {
      container.classList.remove('opened');
      openButton.style.display = 'block';
    });
  });