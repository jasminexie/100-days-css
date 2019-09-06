const pics = Array.from(document.getElementsByTagName('img'));
pics.forEach(pic => {
  pic.addEventListener('click', () => {
    if (pic.className === 'active') {
      pics.forEach(pic => pic.className = '');
    } else {
      pics.forEach(pic => pic.className = 'inactive');
      pic.className = 'active';
    }
  });
});
