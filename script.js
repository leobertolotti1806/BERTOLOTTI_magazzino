let main = document.querySelector("main > div:last-child");

for (let i = 0; i < 10; i++) {
    let div = document.createElement("div");

    for (let j = 0; j < 4; j++) {
        let d = document.createElement("div");

        div.appendChild(d);
    }

    div.lastChild.appendChild(
        document.createElement("div",)
    )

    main.appendChild(div);
}