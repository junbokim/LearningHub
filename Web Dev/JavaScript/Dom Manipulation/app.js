https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png

for(let i = 1; i <= 151;i++){
    let container = document.createElement("div");
    container.className = "pokemonContainer";
    let image = document.createElement("img");
    image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
    let label = document.createElement("span");
    label.innerText = `#${i}`;
    container.appendChild(image);
    container.appendChild(label);
    document.body.appendChild(container);
}