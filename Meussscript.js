document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('product-form');
    const productList = document.getElementById('product-list');
    const sidebar = document.getElementById('sidebar');
    const toggleButton = document.getElementById('toggle-button');



    toggleButton.addEventListener('click', function() {
        sidebar.classList.toggle('hidden');
        toggleButton.classList.toggle('hidden');
        toggleButton.textContent = sidebar.classList.contains('hidden') ? '⇜' : '⇝';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var currentTimeElement = document.getElementById("currentTime");
    var currentTime = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });
    currentTimeElement.textContent =  currentTime;
});
