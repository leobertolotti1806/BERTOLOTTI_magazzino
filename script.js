let data = [
    {
        nome: "Microonde",
        qta: 10,
        origine: "ITA"
    },
    {
        nome: "Pala",
        qta: 4,
        origine: "JPN"
    },
    {
        nome: "Palla",
        qta: 23,
        origine: "IND"
    },
    {
        nome: "Cuffie",
        qta: 14,
        origine: "ITA"
    },
    {
        nome: "Bilanciere",
        qta: 18,
        origine: "JPN"
    },
    {
        nome: "Tazza",
        qta: 25,
        origine: "GER"
    },
    {
        nome: "Vaso",
        qta: 22,
        origine: "RUS"
    },
    {
        nome: "Profumo",
        qta: 52,
        origine: "UK"
    },
    {
        nome: "Bicicletta",
        qta: 7,
        origine: "CINA"
    },
    {
        nome: "Pantaloni",
        qta: 43,
        origine: "ITA"
    },
    {
        nome: "Cuscino",
        qta: 3,
        origine: "UK"
    },
    {
        nome: "T-shirt",
        qta: 14,
        origine: "FRA"
    },
    {
        nome: "Calcolatrice",
        qta: 9,
        origine: "USA"
    },
    {
        nome: "Armadio",
        qta: 25,
        origine: "ITA"
    },
    {
        nome: "Zaino",
        qta: 10,
        origine: "USA"
    }
];


let main = document.querySelector("main > div:last-child");
let menu = document.getElementById("menu");
let inputs = menu.querySelectorAll("input");

for (const item of data) {
    item.prezzo = Math.floor(Math.random() * (150 - 10 + 1)) + 10;

    let div = document.createElement("div");

    div.innerHTML = `
        <div>${item.nome}</div>
        <div>${item.prezzo}€</div>
        <div>${item.qta}</div>
        <div>${item.origine}</div>
        <div></div>`;

    let editBtn = document.createElement("button");
    let removeBtn = document.createElement("button");

    editBtn.textContent = "edit";
    removeBtn.textContent = "delete";

    editBtn.className = removeBtn.className = "material-symbols-rounded";

    removeBtn.addEventListener("click", () => {
        if (menu.style.top != "0px" && confirm("Vuoi eliminare questo prodotto?")) {
            div.remove();
            Array.splice();
        }
    });

    editBtn.addEventListener("click", () => {
        if (menu.style.top != "0px") {
            
        }
    });

    div.lastChild.appendChild(editBtn);
    div.lastChild.appendChild(removeBtn);

    main.appendChild(div);
}

menu.lastElementChild.addEventListener("click", () => {
    menu.style.top = "-50vh";
});

document.getElementById("add").addEventListener("click", () => {
    menu.style.top = "0px";
});

document.getElementById("sort").addEventListener("click", () => {
    if (menu.style.top != "0px") {

    }
});