const themeSelector = document.getElementById("themeSelector");
const body = document.body;
const logo = document.getElementById("img");

function changeTheme() {
  const selectedTheme = themeSelector.value;
  if (selectedTheme === "dark") {
    body.classList.add("dark");
    logo.src = "byui-logo_dark.png";
  } else {
    body.classList.remove("dark");
    logo.src = "byui-logo_blue.webp";
  }
}

themeSelector.addEventListener("click", changeTheme);
