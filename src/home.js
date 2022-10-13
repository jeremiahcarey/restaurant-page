
function createPara(text) {
    const para = document.createElement("p");
    para.innerText = text;

    return para;
}

function createHome() {
    const home = document.createElement("div");
    home.classList.add("home");

    const homeHeader = document.createElement("h2");
    homeHeader.innerText = "Welcome to A Slice of Jazz!";

    const img = document.createElement("img");
    img.src = "img/pizza.jpg";
    img.alt = "Picture of gourmet pizza";

    home.appendChild(homeHeader);
    home.appendChild(img);
    home.appendChild(createPara("Like gourmet stone fired pizza? Like jazz music? Then you'll love A Slice of Jazz. Relaxing and sophisticated decor. Delicious pizza. Exceptional cocktails. Live music every weekend."));
    home.appendChild(createPara("Open 11AM to 11PM seven days a week."));
    home.appendChild(createPara("Reservations accepted, but not required, after 5PM. Call (555) 12-PIZZA."));

    return home;
}


function loadHome() {
    const mainContent = document.querySelector(".main-content");
    mainContent.innerHTML = "";
    mainContent.appendChild(createHome());
}

export default loadHome;