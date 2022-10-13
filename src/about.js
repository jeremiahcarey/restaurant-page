
function createPara(text) {
    const para = document.createElement("p");
    para.innerText = text;

    return para;
}

function createAbout() {
    const about = document.createElement("div");
    about.classList.add("about");

    const aboutHeader = document.createElement("h2");
    aboutHeader.innerText = "About Us";

    const img = document.createElement("img");
    img.src = "img/chef.jpg";
    img.alt = "Picture of a happy chef in kitchen";

    about.appendChild(aboutHeader);
    about.appendChild(img);
    about.appendChild(createPara("Chef Mario has had a passion for pizza for as long as he can remember, and a passion for jazz since he first came across a recording of Chet Baker singing and playing the trumpet.  Combining them seemed like a dream come true.  What could be better than listening to great jazz while enjoying great pizza?  Maybe add in a cocktail and a few good friends.  Heaven."));
    about.appendChild(createPara("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."));

    return about;
}


function loadAbout() {
    const mainContent = document.querySelector(".main-content");
    mainContent.innerHTML = "";
    mainContent.appendChild(createAbout());
}

export default loadAbout;