import loadHome from "./home";
import loadMenu from "./menu";
import loadAbout from "./about";

function loadSidebar() {
    const sidebar = document.createElement("div");
    sidebar.classList.add("sidebar");

    return sidebar;
}

function loadContentBody() {
    const contentBody = document.createElement("div");
    contentBody.classList.add("content-body");
    const mainContent = document.createElement("div");
    mainContent.classList.add("main-content");

    contentBody.appendChild(createHeader());
    contentBody.appendChild(mainContent);

    return contentBody;
}

function createHeader() {
    const header = document.createElement("div");
    header.classList.add("header");
    const logo = document.createElement("div");
    logo.classList.add("logo");

    const logoText = document.createElement("h1");
    logoText.innerText = "A Slice of Jazz";


    logo.appendChild(logoText);

    header.appendChild(logo);
    header.appendChild(createNavbar());

    return header;
}

function createNavbar() {
    const navbar = document.createElement("div");
    navbar.classList.add("navbar");

    const homeBtn = document.createElement("button");
    homeBtn.classList.add("nav-btn", "home-btn", "active");
    homeBtn.innerHTML = "<img src='img/saxman.png'>Home";
    const menuBtn = document.createElement("button");
    menuBtn.classList.add("nav-btn", "menu-btn");
    menuBtn.innerHTML = "<img src='img/saxman.png'>Menu";
    const aboutBtn = document.createElement("button");
    aboutBtn.classList.add("nav-btn", "about-btn");
    aboutBtn.innerHTML = "<img src='img/saxman.png'>About";

    navbar.appendChild(homeBtn);
    navbar.appendChild(menuBtn);
    navbar.appendChild(aboutBtn);

    return navbar;
}

function initializePage() {

    document.body.appendChild(loadSidebar());
    document.body.appendChild(loadContentBody());
    loadHome();

    const navButtons = document.querySelectorAll(".nav-btn");
    navButtons.forEach(button => button.addEventListener("click", function (e) {
        if (e.target.classList.contains("active")) {
            return;
        } else if (e.target.classList.contains("home-btn")) {
            navButtons.forEach(button => button.classList.remove("active"));
            e.target.classList.add("active");
            loadHome();
        } else if (e.target.classList.contains("menu-btn")) {
            navButtons.forEach(button => button.classList.remove("active"));
            e.target.classList.add("active");
            loadMenu();
        } else if (e.target.classList.contains("about-btn")) {
            navButtons.forEach(button => button.classList.remove("active"));
            e.target.classList.add("active");
            loadAbout();
        }
    }))

}

initializePage();
