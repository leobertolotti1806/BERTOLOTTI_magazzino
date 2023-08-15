let data = [
    { nome: "Microonde", qta: 10, origine: "ITA" },
    { nome: "Pala", qta: 4, origine: "JPN" },
    { nome: "Palla", qta: 23, origine: "IND" },
    { nome: "Cuffie", qta: 14, origine: "ITA" },
    { nome: "Bilanciere", qta: 18, origine: "JPN" },
    { nome: "Tazza", qta: 25, origine: "GER" },
    { nome: "Vaso", qta: 22, origine: "RUS" },
    { nome: "Profumo", qta: 52, origine: "UK" },
    { nome: "Bicicletta", qta: 7, origine: "CINA" },
    { nome: "Pantaloni", qta: 43, origine: "ITA" },
    { nome: "Cuscino", qta: 3, origine: "UK" },
    { nome: "T-shirt", qta: 14, origine: "FRA" },
    { nome: "Calcolatrice", qta: 9, origine: "USA" },
    { nome: "Armadio", qta: 25, origine: "ITA" },
    { nome: "Zaino", qta: 10, origine: "USA" }
];

let main = document.querySelector("main > div:last-child");
let search = document.querySelector("input");
let menu = document.getElementById("menu");
let menuIcon = menu.querySelector("#icon");
let menuTitle = menu.querySelector("span");
let inputs = menu.querySelectorAll("input");
let nome = "";

function show() {
    for (let i = 0; i < data.length; i++) {

        if (data[i].show)
            main.children[i].style.display = "";
        else main.children[i].style.display = "none";

        main.children[i].children[0].textContent = data[i].nome;
        main.children[i].children[1].textContent = data[i].prezzo + "€";
        main.children[i].children[2].textContent = data[i].qta;
        main.children[i].children[3].textContent = data[i].origine;
    }
}

function closeMenu() {
    menu.style.top = "-50vh";

    for (const input of inputs)
        input.value = "";

    nome = "";
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

            nome = div.firstElementChild.textContent.toLowerCase();
            inputs[0].value = div.firstElementChild.textContent;
            inputs[1].value = parseInt(div.children[1].textContent);
            inputs[2].value = parseInt(div.children[2].textContent);
            inputs[3].value = div.children[3].textContent;
        }
    });

    div.lastChild.appendChild(editBtn);
    div.lastChild.appendChild(removeBtn);
    main.appendChild(div);
}

for (const item of data) {
    item.show = true;
    item.prezzo = Math.floor(Math.random() * (150 - 10 + 1)) + 10;

    add(item);
}

search.addEventListener("input", () => {
    let val = search.value.toLowerCase();

    if (val != "") {
        for (let i = 0; i < main.childElementCount; i++) {
            let j = 0, record = main.children[i];

            while (j < record.childElementCount - 1
                && !record.children[j].textContent.toLowerCase().includes(val))
                j++;

            if (j == record.childElementCount - 1) {
                record.style.display = "none";
                data[i].show = false;
            } else {
                record.style.display = "";
                data[i].show = true;
            }
        }
    } else {
        for (const record of main.children)
            record.style.display = "";
    }

});

menu.lastElementChild.onclick = menu.querySelector("#undo").onclick = () => {
    if (confirm("Cancellare le modifiche?"))
        closeMenu();
};

document.getElementById("add").addEventListener("click", () => {
    if (menu.style.top != "0px") {
        menu.style.top = "0px";
        menuTitle.textContent = "Aggiungi";
        menuIcon.textContent = "add";
    }
});

document.querySelector("#sort > div:last-child").addEventListener("click", (e) => {
    if (menu.style.top != "0px") {
        let id = e.target.id;

        if (id == "prezzo" || id == "qta") {

            if (e.target.className == "")
                data.sort((x, y) => x[id] - y[id]);//crescente
            else data.sort((x, y) => y[id] - x[id]);//decrescente

        } else if (e.target.className == "")
            data.sort((x, y) => x[id].localeCompare(y[id]));//crescente
        else data.sort((x, y) => y[id].localeCompare(x[id]));//decrescente

        show();

        e.target.classList.toggle("crescente");
    }
});

menu.querySelector("#save").addEventListener("click", () => {
    if (!(/[0-9]/).test(inputs[0].value)) {
        if (inputs[0].value != "") {
            if (inputs[1].value > 0) {
                if (inputs[2].value > 0) {
                    if (!(/[0-9]/).test(inputs[3].value)) {
                        if (inputs[3].value != "") {
                            if (menuIcon.textContent == "add") {
                                //aggiungi prodotto
                                if (!data.some(el => el.nome.toLowerCase() == inputs[0].value.toLowerCase())) {
                                    let obj = {
                                        nome: inputs[0].value,
                                        prezzo: parseInt(inputs[1].value),
                                        qta: parseInt(inputs[2].value),
                                        origine: inputs[3].value
                                    };

                                    data.push(obj);

                                    add(obj);

                                    closeMenu();
                                } else alert(`Il nome ${inputs[0].value} esiste già,\ninserisci un altro nome`);
                            } else if (confirm(`Vuoi veramente aggiornare ${nome}?`)) {
                                //modifica prodotto
                                let ind = data.findIndex(el => el.nome.toLowerCase() == nome);

                                data[ind] = {
                                    nome: inputs[0].value,
                                    prezzo: parseInt(inputs[1].value),
                                    qta: parseInt(inputs[2].value),
                                    origine: inputs[3].value,
                                    show: true
                                }

                                show();

                                closeMenu();
                            }
                        } else alert("Inserisci un' origine");
                    } else alert(`L'origine di ${inputs[3].value} contiene numeri,\ninserisci un altro nome`);
                } else alert("Inserisci una quantità maggiore di 0");
            } else alert("Inserisci un prezzo maggiore di 0€");
        } else alert("Inserisci un nome");
    } else alert(`Il nome ${inputs[0].value} contiene numeri,\ninserisci un altro nome`);
});