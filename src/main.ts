const searchButton = document.querySelector(
  "#search-button",
) as HTMLButtonElement;
const searchInput = document.querySelector("#search-input") as HTMLInputElement;
const result = document.querySelector("#result") as HTMLDivElement;

const handleCheck = (e: Event) => {
  e.preventDefault();
};

searchButton?.addEventListener("click", handleCheck);
