document.addEventListener('DOMContentLoaded', function() {
  var hamburgerIcon = document.getElementById('hamburger-icon');
  var sidebar = document.getElementById('sidebar');

  // 點擊漢堡選單按鈕時顯示/隱藏 sidebar
  hamburgerIcon.addEventListener('click', function(event) {
      if (sidebar.style.display === 'block') {
          sidebar.style.display = 'none';
      } else {
          sidebar.style.display = 'block';
      }
  });

  // 點擊文檔其他部分時隱藏 sidebar
  document.addEventListener('click', function(event) {
      var isClickInsideSidebar = sidebar.contains(event.target);
      var isClickInsideHamburgerIcon = hamburgerIcon.contains(event.target);
      if (!isClickInsideSidebar && !isClickInsideHamburgerIcon) {
          sidebar.style.display = 'none';
      }
  });
});

document.addEventListener('DOMContentLoaded', function() {
    const banner = document.getElementById('banner');
    const content = document.querySelector('.banner-content');
  
    let isDragging = false;
    let startPosition = 0;
    let scrollPosition = 0;
  
    content.addEventListener('mousedown', function(e) {
      isDragging = true;
      startPosition = e.clientX;
      scrollPosition = content.scrollLeft;
    });
  
    content.addEventListener('mousemove', function(e) {
      if (!isDragging) return;
      const distance = (e.clientX - startPosition) * 2;
      content.scrollLeft = scrollPosition - distance;
    });
  
    content.addEventListener('mouseup', function() {
      isDragging = false;
    });
  
    content.addEventListener('mouseleave', function() {
      isDragging = false;
    });
  
    content.addEventListener('click', function(e) {
      if (e.clientX > window.innerWidth / 2) {
        scrollRight();
      } else {
        scrollLeft();
      }
    });
  
    function scrollRight() {
      const firstImage = content.firstElementChild;
      content.appendChild(firstImage);
    }
  
    function scrollLeft() {
      const lastImage = content.lastElementChild;
      content.insertBefore(lastImage, content.firstElementChild);
    }
  });
  
