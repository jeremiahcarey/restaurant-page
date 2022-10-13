function createPara(text) {
    const para = document.createElement("p");
    para.innerText = text;

    return para;
}

function createMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    const menuHeader = document.createElement("h2");
    menuHeader.innerText = "Our Menu";

    const recentPizzaHeader = document.createElement("h3");
    recentPizzaHeader.innerText = "Recently Featured Pizzas";

    const img = document.createElement("img");
    img.src = "img/pizza2.jpg";
    img.alt = "Picture of gourmet pizza";

    menu.appendChild(menuHeader);
    menu.appendChild(img);
    menu.appendChild(createPara("You'll love our unique and gourmet all-vegetarian pizzas. We use only the freshest ingredients, sourcing organic and local when possible. Each and every day we feature a new chef-designed pizza, which can be ordered in either a 10\" personal size or a 15\" shareable size.  Call ahead to ask about the featured pizza that day, or show up and be delightfully surprised."));
    menu.appendChild(recentPizzaHeader);
    menu.appendChild(createPara("Margherita: Organic fresh tomato (Golden Rule Organics), fresh mozzarella made in Berkeley by Belfiore, mozzarella, garlic olive oil, fresh basil"));
    menu.appendChild(createPara("Cremini mushroom, onion, Skyhill Farms goat cheese, mozzarella, garlic olive oil, oregano, Italian parsley"));
    menu.appendChild(createPara("Organic Warren pear (The Peach Jamboree), caramelized onion, walnut, mozzarella, Dunbarton blue cheese, arugula, lemon vinaigrette"));
    menu.appendChild(createPara("Fresh corn, onion, poblano chile, Valbreso feta cheese, mozzarella, garlic olive oil, cilantro, lime"));

    return menu;
}


function loadMenu() {
    const mainContent = document.querySelector(".main-content");
    mainContent.innerHTML = "";
    mainContent.appendChild(createMenu());
}

export default loadMenu;