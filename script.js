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
let menuIcon = menu.querySelector("#icon");
let menuTitle = menu.querySelector("span");
let search = document.querySelector("input");
let inputs = menu.querySelectorAll("input");

data.sort((x, y) => x.nome.local);

for (const item of data) {
    item.prezzo = Math.floor(Math.random() * (150 - 10 + 1)) + 10;

    add(item);
}

function add(obj) {
    let div = document.createElement("div");

    div.innerHTML = `
            <div>${obj.nome}</div>
            <div>${obj.prezzo}€</div>
            <div>${obj.qta}</div>
            <div>${obj.origine}</div>
            <div></div>`;

    let editBtn = document.createElement("button");
    let removeBtn = document.createElement("button");

    editBtn.textContent = "edit";
    removeBtn.textContent = "delete";

    editBtn.className = removeBtn.className = "material-symbols-rounded";

    removeBtn.addEventListener("click", () => {
        if (menu.style.top != "0px" && confirm(`Vuoi veramente eliminare ${obj.nome}?`)) {
            div.remove();
            data.splice(data.findIndex(el => el.nome == obj.nome), 1);
        }
    });

    editBtn.addEventListener("click", () => {
        if (menu.style.top != "0px") {
            menu.style.top = "0px";
            menuIcon.textContent = "edit";
            menuTitle.textContent = "Modifica";
        }
    });

    div.lastChild.appendChild(editBtn);
    div.lastChild.appendChild(removeBtn);
    main.appendChild(div);
}

search.addEventListener("input", () => {
    console.log(search.value)
});

menu.lastElementChild.addEventListener("click", () => {
    menu.style.top = "-50vh";
});

document.getElementById("add").addEventListener("click", () => {
    if (menu.style.top != "0px") {
        menu.style.top = "0px";
        menuTitle.textContent = "Aggiungi";
        menuIcon.textContent = "add";
    }
});

document.getElementById("sort").addEventListener("click", () => {
    if (menu.style.top != "0px") {

    }
});

menu.querySelector("#save").addEventListener("click", () => {
    if (!data.some(el => el.nome.toLowerCase() == inputs[0].value.toLowerCase())) {
        if (!(/[0-9]/).test(inputs[0].value)) {
            if (inputs[0].value != "") {
                if (inputs[1].value > 0) {
                    if (inputs[2].value > 0) {
                        if (!(/[0-9]/).test(inputs[3].value)) {
                            if (inputs[3].value != "") {
                                data.push({
                                    nome: inputs[0].value,
                                    prezzo: parseInt(inputs[1].value),
                                    qta: parseInt(inputs[2].value),
                                    origine: inputs[3].value
                                });
                            } else alert("Inserisci un' origine");
                        } else alert(`L'origine di ${inputs[3].value} contiene numeri,\ninserisci un altro nome`);
                    } else alert("Inserisci una quantità maggiore di 0");
                } else alert("Inserisci un prezzo maggiore di 0€");
            } else alert("Inserisci un nome");
        } else alert(`Il nome ${inputs[0].value} contiene numeri,\ninserisci un altro nome`);
    } else alert(`Il nome ${inputs[0].value} esiste già,\ninserisci un altro nome`);
});