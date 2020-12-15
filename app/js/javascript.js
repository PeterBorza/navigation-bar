console.log('Javascript is running.');

 const data = [
    {
        name: "CSS3",
        items: [
          { link: "https://www.youtube.com/watch?v=qm0IfG1GyZU&t=1081s\" target=\"_about blank\"", name: "Grid Layouts" },
          { link: "https://www.youtube.com/c/programmingwithmosh\" target=\"_about blank\"", name: "Mosh" },
          { link: "https://htmlcheatsheet.com/css/", name: "Cheatsheet" }
        ]
      },
    {
      name: "Tutorials",
      items: [
        { link: "https://youtu.be/FhguwBJeqWs\" target=\"_blank\"", name: "The Net Ninja" },
        { link: "https://www.youtube.com/channel/UClb90NQQcskPUGDIXsQEz5Q\" target=\"_blank\"", name: "Dev Ed" },
        { link: "https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw\" target=\"_blank\"", name: "Web Dev S." },
        { link: "https://www.youtube.com/user/DesignCourse\" target=\"_blank\"", name: "Design Course" },
        { link: "https://www.youtube.com/user/KepowOb\" target=\"_blank\"", name: "Kevin Powell" },
        { link: 'https://www.youtube.com/c/TheCharmefis" target="_blank', name: "Dani Krossing" },
        { link: 'https://www.w3schools.com" target="_blank"', name: "W3Schools" }
      ]
    },
   
    {
      name: "Lectures",
      items: [
        { link: "#", name: "Lecture 1" },
        { link: "#", name: "Lecture 2" },
        { link: "#", name: "Lecture 3" },
        { link: "#", name: "Lecture 4" }
      ]
    },
    {
      name: "Libraries",
      items: [
        { link: "https://jquery.com", name: "Jquery" },
        { link: "https://fontawesome.com", name: "Font Awesome" },
        { link: "https://cdnjs.com", name: "Cdnjs" },
        { link: "https://greensock.com", name: "Greensock" },
        { link: "https://getbootstrap.com", name: "Bootstrap" }
      ]
    }
  ];

 
  const appendMenu = () => {
    const dropMenu = document.querySelector(".drop-menu"); // 
    const menuItems = renderNavigationBar();
    menuItems.forEach(item => dropMenu.appendChild(item));
  };

  const renderNavigationBar = () => data.map(renderMenuItem);

  const renderMenuItem = item => {
    const button = buttonMaker(item.name); 
    const listBox = renderSubmenuItems(item.items); 
   
    const SectionDiv = document.createElement("div");
    SectionDiv.classList.add("section");
  
    SectionDiv.appendChild(button);
    SectionDiv.appendChild(listBox);
  
    return SectionDiv;
  };

  const buttonMaker = (name) => {
    const button = document.createElement("button"); 
    button.classList.add("myButtons");
    button.innerText = name;

    return button;
  };

  const renderSubmenuItems = submenuItems => {
    const listItems = submenuItems.map(renderSubmenuItem);
  
    const container = document.createElement("div");
    container.classList.add("ul-box");
  
    const ul = document.createElement("ul");
    ul.classList.add("list");
  
    listItems.forEach(listItem => ul.appendChild(listItem));
    container.appendChild(ul);
  
    return container;
  };

  renderSubmenuItem = submenuItem => {
    const li = document.createElement("li");
    const ahref = document.createElement("a");
    ahref.setAttribute("href", submenuItem.link);
    ahref.setAttribute("target", '_blank');
    ahref.innerText = submenuItem.name;
    li.appendChild(ahref);
    return li;
  };

 appendMenu();

 const dropButtons = () => {
  const sections = document.querySelectorAll('.section');
  const listItems = document.querySelectorAll('.list li');
  sections.forEach((section, i) => {
    section.addEventListener('click', (e) => {
      let target = e.target;
      if(target.classList.contains('myButtons')){
        listItems.classList.toggle('open');
      }

      // listItems[i].classList.toggle('open');
    });
  });
 };

 dropButtons();

 