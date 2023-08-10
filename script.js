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

for (const item of data) {
    let div = document.createElement("div");

    for (let i = 0; i < 5; i++)
        div.appendChild(document.createElement("div"));
    

    let editBtn = document.createElement("button");
    let removeBtn = document.createElement("button");

    editBtn.textContent = "edit";
    removeBtn.textContent = "delete";

    editBtn.className = removeBtn.className = "material-symbols-rounded";

    removeBtn.addEventListener("click", () => {
        if (confirm("Vuoi eliminare questo prodotto?")) {
            div.remove();
            Array.splice();
        }        
    });

    div.lastChild.appendChild(editBtn);
    div.lastChild.appendChild(removeBtn);

    main.appendChild(div);
}