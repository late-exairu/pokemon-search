const searchButton = document.querySelector(
  "#search-button",
) as HTMLButtonElement;
const searchInput = document.querySelector("#search-input") as HTMLInputElement;
const form = document.querySelector("#search-input") as HTMLFormElement;
const card = document.querySelector("#card") as HTMLDivElement;
const pokemonName = document.querySelector("#pokemon-name") as HTMLSpanElement;
const pokemonId = document.querySelector("#pokemon-id") as HTMLSpanElement;
const weight = document.querySelector("#weight") as HTMLSpanElement;
const height = document.querySelector("#height") as HTMLSpanElement;
const spriteContainer = document.querySelector(
  "#sprite-container",
) as HTMLDivElement;
const types = document.querySelector("#types") as HTMLDivElement;
const hp = document.querySelector("#hp") as HTMLTableCellElement;
const attack = document.querySelector("#attack") as HTMLTableCellElement;
const defense = document.querySelector("#defense") as HTMLTableCellElement;
const specialAttack = document.querySelector(
  "#special-attack",
) as HTMLTableCellElement;
const specialDefense = document.querySelector(
  "#special-defense",
) as HTMLTableCellElement;
const speed = document.querySelector("#speed") as HTMLTableCellElement;

const handleSearch = (e: Event) => {
  e.preventDefault();
  const query = searchInput.value.toLowerCase().trim().replace(" ", "-");
  if (!query) return;

  fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${query}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      pokemonName.textContent = data.name;
      pokemonId.textContent = `#${data.id}`;
      weight.textContent = `Weight: ${data.weight}`;
      height.textContent = `Height: ${data.height}`;
      types.innerHTML = "";
      data.types.forEach((type: any) => {
        types.innerHTML += `<span class="type ${type.type.name}">${type.type.name}</span>`;
      });
      hp.textContent = data.stats[0].base_stat;
      attack.textContent = data.stats[1].base_stat;
      defense.textContent = data.stats[2].base_stat;
      specialAttack.textContent = data.stats[3].base_stat;
      specialDefense.textContent = data.stats[4].base_stat;
      speed.textContent = data.stats[5].base_stat;

      // Remove previous sprite and add new one
      spriteContainer.innerHTML = "";
      const image = document.createElement("img");
      image.src = data.sprites.front_default;
      image.alt = data.name;
      image.id = "sprite";
      image.classList.add("mx-auto", "w-[192px]");
      spriteContainer.appendChild(image);
      card.classList.remove("hidden");
    })
    .catch((err) => {
      alert("Pokémon not found");
      console.error(err);
      card.classList.add("hidden");
    });
};

form?.addEventListener("submit", handleSearch);
searchButton?.addEventListener("click", handleSearch);
