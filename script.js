function changeButtonColorOnHover(button, hoverColor) {
    button.addEventListener("mouseover", function () {
        .sidebar.button.backgroundColor = hoverColor;
    });

    button.addEventListener("mouseout", function () {
        .sidebar.button.backgroundColor = "#fff";
    });
}

// Exemplo de uso:
const button = document.getElementById("myButton");
changeButtonColorOnHover(button, "#e0e0e0");