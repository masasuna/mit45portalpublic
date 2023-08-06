const menu = document.getElementById("menu");

Array.from(document.getElementsByClassName("menu-item"))
  .forEach((item, index) => {
    item.onmouseover = () => {
      menu.dataset.activeIndex = index;
    }
  });

 
  // const MenuItem = document.getElementsByClassName("sub-menu-item");
  // const subMenu = document.getElementById('sub-menu');
  
  // financeMenuItem.addEventListener('mouseover', () => {
  //     subMenu.style.display = 'block';
  // });
  
  // financeMenuItem.addEventListener('mouseout', () => {
  //     subMenu.style.display = 'none';
  // });
  
  // subMenu.addEventListener('mouseover', () => {
  //     subMenu.style.display = 'block';
  // });
  
  // subMenu.addEventListener('mouseout', () => {
  //     subMenu.style.display = 'none';
  // });
  
//    const menuItems = document.getElementsByClassName("menu-item");

// Array.from(menuItems).forEach((item, index) => {
//   item.addEventListener('mouseover', () => {
//     menu.dataset.activeIndex = index;
//     const subMenu = item.nextElementSibling;
//     if (subMenu && subMenu.classList.contains('sub-menu')) {
//       subMenu.style.display = 'block';
//     }
//   });

//   item.addEventListener('mouseout', () => {
//     const subMenu = item.nextElementSibling;
//     if (subMenu && subMenu.classList.contains('sub-menu')) {
//       subMenu.style.display = 'none';
//     }
//   });
// });

const menuItems = document.getElementsByClassName("menu-item");
const subMenus = document.getElementsByClassName("sub-menu");

Array.from(menuItems).forEach((item, index) => {
  const subMenu = item.nextElementSibling;

  item.addEventListener('mouseenter', () => {
    menu.dataset.activeIndex = index;
    if (subMenu && subMenu.classList.contains('sub-menu')) {
      subMenu.style.display = 'block';
    }
  });

  item.addEventListener('mouseleave', () => {
    if (subMenu && subMenu.classList.contains('sub-menu')) {
      setTimeout(() => {
        if (!subMenu.matches(':hover')) {
          subMenu.style.display = 'none';
        }
      }, 100);
    }
  });

  subMenu.addEventListener('mouseenter', () => {
    if (subMenu && subMenu.classList.contains('sub-menu')) {
      subMenu.style.display = 'block';
    }
  });

  subMenu.addEventListener('mouseleave', () => {
    if (subMenu && subMenu.classList.contains('sub-menu')) {
      subMenu.style.display = 'none';
    }
  });
});